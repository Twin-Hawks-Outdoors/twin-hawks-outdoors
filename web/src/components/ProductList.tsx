import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import {
  AllProductsQuery,
  SanityProduct,
  SanityProductEdge,
} from '../../graphql-types';
import ProductCard from './ProductCard';

function ProductList() {
  const { allSanityProduct } = useStaticQuery<AllProductsQuery>(graphql`
    query AllProducts {
      allSanityProduct(sort: { fields: title, order: ASC }) {
        totalCount
        edges {
          node {
            blurb
            title
            id
            categories {
              id
              title
              slug {
                current
              }
            }
            tags
            variants {
              _key
            }
            defaultProductVariant {
              isAvailable
              price
            }
            mainImage {
              asset {
                gatsbyImageData(
                  aspectRatio: 1
                  formats: AUTO
                  layout: CONSTRAINED
                  width: 400
                )
                altText
              }
            }
            slug {
              current
            }
          }
        }
      }
    }
  `);
  return (
    <section className="container pb-24">
      <h2>All {allSanityProduct?.totalCount} Products</h2>
      <div>
        {allSanityProduct?.edges.map(({ node }) => (
          <ProductCard product={node as SanityProduct} key={node.id} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
