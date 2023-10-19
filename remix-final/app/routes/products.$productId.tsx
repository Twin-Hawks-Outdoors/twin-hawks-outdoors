import { PortableText } from "@portabletext/react";
import type { DataFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import groq from "groq";
import { useState } from "react";
import type { ProductVariant } from "types/product";
import { productZ } from "types/product";
import { useShoppingCart } from "use-shopping-cart";
import imageUrlBuilder from '@sanity/image-url'
import Layout from "~/components/Layout";
import { ImageQuery, MainImage } from "~/components/MainImage";
import { ProductGallery } from "~/components/ProductGallery";
import { Icon } from "~/components/ui/Icon";
import { cn } from "~/lib/misc";
import { portableTextComponents } from "~/lib/portableTextComponents";
import { client } from "~/sanity.server";
import { ErrorBoundary as RouteErrorBoundary } from "~/components/ErrorBoundary";

export const ProductVariantQuery = groq`
	_type == "productVariant" => {
		isAvailable,
		_type,
		_key,
		title,
		grams,
		price,
		sku,
		taxable,
		shippingRate,
		images [] {
			${ImageQuery}
		}
	}
`;

export const meta: MetaFunction<typeof loader> = ({ data, matches }) => {
  return [
    { title: `Shop: ${data?.product?.title || ""} | ${matches[0]?.data?.data?.title}` },
    {
      name: "description",
      content:
        (data?.product?.blurb || matches[0]?.data?.data?.description) ?? "",
    },
    {
      name: "og:image",
      content: data?.ogImage || "",
    },
    {
      property: `og:type`,
      content: `product`,
    },
    {
      name: `og:title`,
      content: `${data?.product?.title || ""} | ${matches[0]?.data?.data?.title}`,
    },
    {
      name: `og:description`,
      content:
        (data?.product?.blurb || matches[0]?.data?.data?.description) ?? "",
    },
  ];
};

export const loader = async ({ params }: DataFunctionArgs) => {
	const builder = imageUrlBuilder(client);


  const product = await client
    .fetch(
      groq`
		*[_type == "product" && slug.current == $slug][0]{
				_type,
				_id,
				title,
				mainImage {
					${ImageQuery},
				},
				blurb,
				body,
				tags,
				defaultProductVariant {
					_key,
					${ProductVariantQuery}
				},
				variants[] {
					${ProductVariantQuery}
				},
				categories[]->{
					_id,
					_type,
					title,
					"slug": slug.current,
				}
			}
		`,
      {
        slug: `/products/${params.productId}/`,
      }
    )
    .then((res) => (res ? productZ.parse(res) : null));

  if (!product) {
    throw new Response("Not Found", { status: 404 });
  }

  const allVariants = [
    product.defaultProductVariant,
    ...(product.variants || []),
  ];

	const cartImage = builder.image(product?.mainImage || {}).width(400).height(400).crop("focalpoint").auto("format").quality(60).url()
	const ogImage = builder.image(product?.mainImage || {}).width(1200).height(627).crop("focalpoint").auto("format").quality(60).url()

  return json(
    {
			ogImage,
			cartImage,
      product,
      allVariants,
    },
    {
      headers: {
        "Cache-Control": "public, max-age=15000 s-maxage=30000",
      },
    }
  );
};
export default function ProductIDRoute() {
  const { product, allVariants, cartImage } = useLoaderData<typeof loader>();
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.defaultProductVariant
  );
	const {addItem, handleCartHover}= useShoppingCart()
  return (
    <Layout>
      {/* <PrettyJson data={{ product, allVariants }} /> */}
      <section className="container py-24 grid md:grid-cols-2 gap-8">
        {product?.defaultProductVariant?.images &&
        product?.defaultProductVariant?.images?.length > 0 ? (
          <ProductGallery images={product?.defaultProductVariant?.images} />
        ) : allVariants?.[0]?.images && allVariants?.[0]?.images.length > 0 ? (
          <ProductGallery images={allVariants?.[0]?.images} />
        ) : (
          <MainImage
            className="w-full max-w-full object-cover aspect-1 max-h-full"
            width={800}
            height={800}
            image={product?.mainImage}
            alt={product?.mainImage?.asset?.altText ?? product.title}
          />
        )}
        <div className="prose-headings:font-sans prose-p:max-w-prose @container w-full justify-self-center">
          <h1 className="mt-0 text-xl">{product?.title}</h1>
          <PortableText
            value={product?.body ?? []}
            components={portableTextComponents}
          />
          <div className="flex  flex-wrap @xl:flex-nowrap gap-4 my-4 ">
            {allVariants?.map((variant) => (
              <button
                key={variant?.title}
                className={cn(
                  `border-2 px-2 rounded-sm bg-transparent outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400`,
                  selectedVariant._key === variant._key &&
                    "bg-red-500 border-red-500 text-white",
                  !variant.isAvailable && "opacity-50 line-through"
                )}

                type="button"
                disabled={!variant?.isAvailable}
                onClick={() => setSelectedVariant(variant)}
              >
                {variant?.title}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 mb-4">
            <h6 className="text-base ">Quantity:</h6>
            <button
              className="p-1 rounded-sm outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400"
              type="button"
              title="Decrease quantity by 1"
              onClick={() => setQuantity((prev) => (prev > 0 ? prev - 1 : 0))}
            >
              <Icon name="minus" />
            </button>
            <span>{quantity}</span>
            <button
              type="button"
              title="Increase quantity by 1"
              className="p-1 rounded-sm outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              <Icon name="plus" />
            </button>
          </div>
          <button
            disabled={quantity < 1 || !selectedVariant?.isAvailable}
            className=" font-serif border-2 border-rust-500/90 rounded-md outline-none px-4 py-2 focus:border-rust-600 bg-rust-500/90 hover:bg-rust-400 focus:bg-rust-400 active:bg-rust-800 text-white shadow-md hover:shadow-lg transition-all duration-200 disabled:cursor-not-allowed disabled:hover:bg-rust-500/90 disabled:opacity-25"
            type="button"
            aria-label={`Add ${selectedVariant?.title || ""} ${
              selectedVariant?.title || ""
            } to your cart`}
            onClick={() => {
              addItem(
                {
                  currency: "USD",
                  name: `${
                    allVariants.length > 1 ? (selectedVariant?.title as string) : ""
                  } ${product?.title as string}`,
                  description: product?.blurb as string,
                  id: selectedVariant?.sku || "",
                  price: selectedVariant?.price as number,
                  image: cartImage,
                  sku: selectedVariant?.sku as string,
                  product_data: {
                    type: `${selectedVariant?.title as string} ${
                      selectedVariant?.title as string
                    }`,
                  },
                },
                { count: quantity }
              );
              handleCartHover();
              setQuantity(1);
            }}
          >
            Add to Cart
          </button>
        </div>
      </section>
    </Layout>
  );
}
export function ErrorBoundary() {
  return <RouteErrorBoundary />;
}
