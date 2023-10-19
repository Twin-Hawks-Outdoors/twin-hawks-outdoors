import type { MetaFunction} from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import groq from "groq";
import { pageZ } from "types/page";
import { productExcerptZ } from "types/product";
import { z } from "zod";
import { ImageQuery } from "~/components/MainImage";
import { ProductCardQuery } from "~/components/ProductCard";
import ProductList from "~/components/ProductList";
import { builder, client } from "~/sanity.server";

export const meta: MetaFunction<typeof loader> = ({ data, matches }) => {

  return [
    {
      title: `Shop All ${data?.products?.totalCount} Products | ${matches[0]?.data?.data?.title}`,
    },
    {
      name: "description",
      content:
        (data?.meta?.description || matches[0]?.data?.data?.description) ?? "",
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
      content: `Shop All ${data?.products?.totalCount} Products | ${matches[0]?.data?.data?.title}`,
    },
    {
      name: `og:description`,
      content:
        (data?.meta?.description || matches[0]?.data?.data?.description) ?? "",
    },
  ];
};

export const loader = async () => {
  const metaPromise = client
    .fetch(
      groq`*[_type =="page" && slug.current == "/shop/"][0]{
		openGraphImage {
			${ImageQuery}
		},
		description,
		title
	}`
    )
    .then((res) =>
      res
        ? pageZ
            .pick({ description: true, title: true, openGraphImage: true })
            .parse(res)
        : null
    );
  const productsPromise = client
    .fetch(
      groq`{"products":*[_type == "product"]{
				_key,
				${ProductCardQuery}

			}, "totalCount": count(*[_type == "product"])}`
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
            })
            .parse(res)
        : null
    );

  const [products, meta] = await Promise.all([productsPromise, metaPromise]);

  if (!products?.products?.length ||  !meta) {
    throw new Response("No Products found", { status: 404 });
  }
	const ogImage = builder.image(meta.openGraphImage ?? {})?.auto("format").quality(60).width(1200).height(627).crop("focalpoint").url()

  return json(
    { products , meta, ogImage},
    {
      headers: {
        "Cache-Control": "public, max-age=3600 s-maxage=3600",
      },
    }
  );
};
export default function ShopIndexRoute() {
  const {
    products: { products },
  } = useLoaderData<typeof loader>();
  return (
    <section className="@container my-16">
      <ProductList products={products} />
    </section>
  );
}
