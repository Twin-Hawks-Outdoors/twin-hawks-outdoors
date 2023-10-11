import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import {
  AllProductsQuery,
  SanityProduct,
  SanityProductEdge,
} from '../../graphql-types';
import ProductCard from './ProductCard';

function ProductList() {
	const data = useStaticQuery(graphql`
		query AllProducts {
			allSanityProduct {
				totalCount
			}

		}
	`)
//   const { allSanityProduct } = useStaticQuery<AllProductsQuery>(graphql`query AllProducts {
//   allSanityProduct {
//     totalCount
//     edges {
//       node {
//         blurb
//         title
//         id
//         categories {
//           id
//           title
//           slug {
//             current
//           }
//         }
//         tags
//         variants {
//           _key
//         }
//         defaultProductVariant {
//           isAvailable
//           price
//         }
//         mainImage {
//           asset {
//             gatsbyImageData(aspectRatio: 1, formats: AUTO, layout: CONSTRAINED, width: 400)
//             altText
//           }
//         }
//         slug {
//           current
//         }
//       }
//     }
//   }
// }`);

// console.log({allSanityProduct})
  return (
    <section className="container pb-24">
			<h2>All Products</h2>
      {/* <h2>All {allSanityProduct?.totalCount} Products</h2> */}
      {/* <div className="grid gap-8 sm:[grid-template-columns:repeat(auto-fill,minmax(400px,1fr))] mx-auto">
        {allSanityProduct?.edges.map(({ node }) => (
          <ProductCard product={node as SanityProduct} key={node.id} />
        ))}
      </div> */}
			<pre></pre>
    </section>
  );
}

export default ProductList;
