import groq from 'groq';
import { CartDetails, CartEntry } from 'use-shopping-cart/core';
import {
  Maybe,
  SanityProduct,
  SanityProductVariant,
} from '../../graphql-types';
import { client } from './sanityClient';

interface ExtendedProduct extends SanityProduct {
  flattened: SanityProductVariant[];
}
type ValidatedItems = {
  price_data: {
    tax_behavior?: string;
    currency: string;
    unit_amount: Maybe<number> | undefined;
    product_data: {
      description: string;
      images: (string | undefined)[];
      name: string;
    };
  };
  quantity: number;
};
export const validateCartItems = async (products: CartDetails) => {
  const availableProducts: SanityProductVariant[] = [];
  const validatedItems: ValidatedItems[] = [];
  const inventory: ExtendedProduct[] =
    await client.fetch(groq`*[_type == 'product'] {
        "flattened":[...variants, defaultProductVariant]{
          sku,
          isAvailable,
          price,
          title,
          shippingRate
        },
      blurb
      }`);

  inventory.forEach((product: ExtendedProduct) => {
    availableProducts.push(
      ...product.flattened
        .map((v) => ({ ...v, description: product.blurb || '' }))
        .filter((variant) => variant.isAvailable)
    );
  });

  // loop over each key in products object and check against the available products array to see if its available
  Object.keys(products).forEach((id) => {
    const inventoryItem = availableProducts.find(({ sku }) => sku === id);

    if (inventoryItem === undefined) {
      throw new Error(`Invalid cart: Product with sku ${id} is not available`);
    }


    const item = {
      price_data: {
        currency: 'USD',
        unit_amount: inventoryItem.price,
        tax_behavior: 'exclusive',
        product_data: {
          name: products[id].name || '',
          description: products[id].description || '',
          images: [products[id].image],
          metadata: {
            shippingTotal:
              (inventoryItem?.shippingRate || 0) * products[id].quantity,
          },
        },
        ...products[id].price_data,
      },
      quantity: products[id].quantity,
    };
    validatedItems.push(item);
  });
  return validatedItems;
};
