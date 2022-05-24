/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { PortableText } from '@portabletext/react';
import { graphql, PageProps, StaticQueryDocument } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import { DebugCart, useShoppingCart } from 'use-shopping-cart';
import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi';
import {
  SanityProductQueryQuery,
  SanityProductVariant,
} from '../../graphql-types';
import Layout from '../components/Layout';

export default function SanityProduct({
  data,
  location,
}: PageProps<SanityProductQueryQuery>) {
  const { sanityProduct } = data;
  const initialVariant = {
    ...sanityProduct?.defaultProductVariant,
    quantity: 1,
  };
  const [product, setProduct] = React.useState<SanityProductVariant>(
    initialVariant as SanityProductVariant
  );
  const [quantity, setQuantity] = React.useState(1);

  // use shopping cart
  const { addItem, handleCartHover } = useShoppingCart();

  const allVariants: SanityProductVariant[] = [
    initialVariant as SanityProductVariant,
    ...(sanityProduct?.variants as SanityProductVariant[]),
  ];
  return (
    <Layout location={location}>
      <section className="container py-24 grid md:grid-cols-2 gap-8">
        <GatsbyImage
          className="w-full max-w-full aspect-square max-h-full"
          alt={
            (product?.images?.[0]?.asset?.altText as string) ||
            (sanityProduct?.mainImage?.asset?.altText as string) ||
            sanityProduct?.title ||
            ''
          }
          image={
            (product?.images?.[0]?.asset
              ?.gatsbyImageData as IGatsbyImageData) ||
            (sanityProduct?.mainImage?.asset
              ?.gatsbyImageData as IGatsbyImageData)
          }
        />
        <div className="prose-headings:font-sans prose-p:max-w-prose  justify-self-center">
          <h1 className="mt-0 text-xl">{sanityProduct?.title}</h1>
          <PortableText value={sanityProduct?._rawBody} />
          <div className="flex gap-4 my-4">
            {allVariants?.map((variant) => (
              <button
                key={variant?.title}
                className={`border-2 px-2 rounded-sm outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 ${
                  product?._key === variant?._key
                    ? 'bg-red-500 border-red-500 text-white'
                    : 'bg-transparent'
                } ${!variant?.isAvailable ? 'opacity-50 line-through' : ''}`}
                type="button"
                disabled={!variant?.isAvailable}
                onClick={() => setProduct(variant)}
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
              <HiOutlineMinus />
            </button>
            <span>{quantity}</span>
            <button
              type="button"
              title="Increase quantity by 1"
              className="p-1 rounded-sm outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              <HiOutlinePlus />
            </button>
          </div>
          <button
            disabled={quantity < 1}
            className=" font-serif border-2 border-rust-500/90 rounded-md outline-none px-4 py-2 focus:border-rust-600 bg-rust-500/90 hover:bg-rust-400 focus:bg-rust-400 active:bg-rust-800 text-white shadow-md hover:shadow-lg transition-all duration-200"
            type="button"
            aria-label={`Add ${product?.title || ''} ${
              sanityProduct?.title || ''
            } to your cart`}
            onClick={() => {
              addItem(
                {
                  // name: `${product?.title as string} ${
                  //   sanityProduct?.title as string
                  // }`,
                  description: sanityProduct?.blurb as string,
                  id: product?.sku || '',
                  price: product?.price as number,
                  image: sanityProduct?.mainImage?.asset?.gatsbyImageData
                    ?.images?.fallback?.src as string,
                  sku: product?.sku as string,
                  product_data: {
                    type: `${product?.title as string} ${
                      sanityProduct?.title as string
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

export const query: StaticQueryDocument = graphql`
  fragment ProductVariant on SanityProductVariant {
    title
    _key
    grams
    isAvailable
    price
    sku
    taxable
    images {
      asset {
        altText
        gatsbyImageData(layout: CONSTRAINED, width: 1000, aspectRatio: 1)
      }
    }
    _type
  }
  query SanityProductQuery($id: String) {
    sanityProduct(id: { eq: $id }) {
      title
      id
      mainImage {
        asset {
          altText
          gatsbyImageData(layout: CONSTRAINED, width: 1000, aspectRatio: 1)
        }
      }
      variants {
        ...ProductVariant
      }
      categories {
        title
        slug {
          current
        }
      }
      blurb
      defaultProductVariant {
        ...ProductVariant
      }

      _rawBody(resolveReferences: { maxDepth: 10 })
    }
  }
`;
