import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import { BsCamera } from 'react-icons/bs';
import { formatCurrencyString } from 'use-shopping-cart';
import { SanityProduct, SanityProductVariant } from '../../graphql-types';
import Button from './Button';
import UniversalLink from './UniversalLink';

function ProductCard({ product }: { product: SanityProduct }) {
  const { isAvailable } = product.defaultProductVariant as SanityProductVariant;
  const hasOptions = product.variants?.length > 0;
  return (
    <div className="bg-cream-50 rounded-md overflow-hidden shadow-md hover:shadow-lg transition-all duration-150">
      <UniversalLink to={product?.slug?.current as string}>
        {!isAvailable && <div>Sold Out</div>}
        <div className="grid">
          {product.mainImage ? (
            <GatsbyImage
              className="w-full aspect-square row-start-1 col-start-1 z-0"
              image={
                product?.mainImage?.asset?.gatsbyImageData as IGatsbyImageData
              }
              alt={product?.mainImage?.asset?.altText || product?.title || ''}
            />
          ) : (
            <div className="aspect-square w-full bg-teal-50 grid place-items-center row-start-1 col-start-1 z-0">
              <span className="flex items-center gap-2">
                <BsCamera />
                No Image
              </span>
            </div>
          )}
          <h4 className="text-center m-0 pb-4 pt-8 text-white row-start-1 col-start-1 z-10 self-end bg-gradient-to-t from-rust-900   to-transparent">
            {product?.title}
          </h4>
        </div>
      </UniversalLink>
      <div className="p-4 text-center">
        <p className="mb-2">
          {formatCurrencyString({
            value: product?.defaultProductVariant?.price || 0,
            currency: 'USD',
          })}
        </p>
        {product?.variants?.length > 0 ? (
          <Button
            to={product?.slug?.current as string}
            bgColor="red"
            className="button-sm mt-0"
          >
            Select Options
          </Button>
        ) : (
          <Button
            to={product?.slug?.current as string}
            className="button-sm mt-0"
            bgColor="transparent"
          >
            See Details
          </Button>
        )}
      </div>{' '}
    </div>
  );
}

export default ProductCard;
