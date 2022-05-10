import { PortableText } from '@portabletext/react';
import { graphql, PageProps, StaticQueryDocument } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import { DebugCart } from 'use-shopping-cart';
import {
  SanityProductQueryQuery,
  SanityProductVariant,
} from '../../graphql-types';
import PrettyJson from '../components/PrettyJson';

export default function SanityProduct({
  data,
}: PageProps<SanityProductQueryQuery>) {
  const { sanityProduct } = data;
  const [product, setProduct] = React.useState<SanityProductVariant>(
    data?.sanityProduct?.defaultProductVariant as SanityProductVariant
  );
  console.log(product);

  const allVariants: SanityProductVariant[] = [
    product,
    ...(sanityProduct?.variants as SanityProductVariant[]),
  ];
  console.log(allVariants);
  return (
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
          (product?.images?.[0]?.asset?.gatsbyImageData as IGatsbyImageData) ||
          (sanityProduct?.mainImage?.asset?.gatsbyImageData as IGatsbyImageData)
        }
      />
      <div className="prose-headings:font-sans prose-p:max-w-prose  justify-self-center">
        <h1 className="mt-0 text-xl">{sanityProduct?.title}</h1>
        <PortableText value={sanityProduct?._rawBody} />
        <div>
          {allVariants?.map((variant) => (
            <button type="button">{variant?.title}</button>
          ))}
        </div>
        <div>
          <p className="m-0">Quantity:</p>
          <button type="button">-</button>
          <span>1</span>
          <button type="button">+</button>
        </div>
        <button type="button">Add to Cart</button>
      </div>
      {/* <PrettyJson data={data} /> */}
      <DebugCart />
    </section>
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
      defaultProductVariant {
        ...ProductVariant
      }
      _rawBody(resolveReferences: { maxDepth: 10 })
    }
  }
`;
