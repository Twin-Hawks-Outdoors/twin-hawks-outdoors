import type { DataFunctionArgs, MetaFunction} from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import groq from "groq";
import { productExcerptZ } from "types/product";
import { z } from "zod";
import { ProductCardQuery } from "~/components/ProductCard";
import ProductList from "~/components/ProductList";
import { builder, client } from "~/sanity.server";
import { ErrorBoundary as RouteErrorBoundary } from "~/components/ErrorBoundary";
export const meta: MetaFunction<typeof loader> = ({ data, matches, params }) => {

  return [
    {
      title: `Shop ${data?.products?.totalCount} ${data?.products?.category?.title} Products | ${matches[0]?.data?.data?.title}`,
    },
    {
      name: "description",
      content:
        `Shop all ${data?.products?.totalCount} ${data?.products?.category?.title} products from ${matches[0]?.data?.data?.title}` ??
        "",
    },
    {
      name: "og:image",
      content: data?.ogImage || "",
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `og:title`,
      content: `Shop ${data?.products?.totalCount} ${data?.products?.category?.title} Products | ${matches[0]?.data?.data?.title}`,
    },
    {
      name: `og:description`,
      content:
        `Shop all ${data?.products?.totalCount} ${data?.products?.category?.title} products from ${matches[0]?.data?.data?.title}` ??
        "",
    },
  ];
};

export const loader = async ({ params }: DataFunctionArgs) => {
  const products = await client
    .fetch(
      groq`{"products":*[_type == "product" && $category in categories[]->slug.current ]{
				_key,
				${ProductCardQuery}

			}, "totalCount": count(*[_type == "product"  && $category in categories[]->slug.current ]),
				"category": *[_type == "category" && slug.current == $category][0]{
					title
				}
			}`,
      {
        category: params.categoryId,
      }
    )
    .then((res) =>
      res
        ? z
            .object({
              products: z.array(
                productExcerptZ
                  .omit({ defaultProductVariant: true, variants: true })
                  .extend({
                    defaultProductVariant: z.object({
                      isAvailable: z.boolean(),
                      price: z.number(),
                    }),
                    variants: z
                      .array(z.object({ _key: z.string().nullish() }).nullish())
                      .nullish(),
                  })
              ),
              totalCount: z.number(),
							category: z.object({title: z.string()})
            })
            .parse(res)
        : null
    );

  if (!products?.products?.length) {
    throw new Response("No Products found", { status: 404 });
  }

	const ogImage = builder.image(products.products?.[0]?.mainImage || {}).auto("format").crop("focalpoint").width(1200).height(627).quality(60).url()



  return json(
    { products, ogImage },
    {
      headers: {
        "Cache-Control": "public, max-age=3600 s-maxage=3600",
      },
    }
  );
};

export default function ShopCategoryRoute() {
  const {
    products: { products },
  } = useLoaderData<typeof loader>();
  return (
    <section className="@container my-16">
      <ProductList products={products} />
    </section>
  );
}
export function ErrorBoundary() {
  return <RouteErrorBoundary />;
}
