import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import { SanityProduct, SanityProductVariant } from '../../graphql-types';
import Button from './Button';

function ProductCard({ product }: { product: SanityProduct }) {
  const { isAvailable } = product.defaultProductVariant as SanityProductVariant;
  const hasOptions = product.variants?.length > 0;
  return (
    <div>
      {!isAvailable && <div>Sold Out</div>}
      <h4>{product?.title}</h4>
      <GatsbyImage
        image={product?.mainImage?.asset?.gatsbyImageData as IGatsbyImageData}
        alt={product?.mainImage?.asset?.altText || product?.title || ''}
      />

      <p>{}</p>

      <div>
        {product?.variants?.length > 0 ? (
          <Button
            to={product?.slug?.current as string}
            bgColor="red"
            className="button-sm"
          >
            Select Options
          </Button>
        ) : (
          <button>Add to cart</button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
