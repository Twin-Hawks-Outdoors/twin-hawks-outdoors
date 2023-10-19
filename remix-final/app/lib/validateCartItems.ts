import groq from "groq";
import type { CartDetails } from "use-shopping-cart/core";

import { client } from "./sanityClient";
import { z } from "zod";
import { productVariantZ, productZ } from "types/product";
import { writeClient } from "~/sanity.server";

export type ValidatedItems = {
  price_data: {
    tax_behavior?: string;
    currency: string;
    unit_amount: number | undefined;
    product_data: {
      description: string;
      images: (string | undefined)[];
      name: string;
			metadata: {
				shippingTotal?: number
			}
    };
  };
  quantity: number;
};

export const extendedProductVariantZ = productVariantZ
  .extend({
    sanityId: z.string().nullish(),
    description: z.string().nullish(),
  })
  .pick({
		description: true,
		sanityId: true,
    sku: true,
    isAvailable: true,
    price: true,
    shippingRate: true,
    title: true,
    _type: true,
  });

export const extendedProductZ = productZ
  .extend({
    flattened: z.array(extendedProductVariantZ),
  })
  .pick({
    _type: true,
    _id: true,
    flattened: true,
    blurb: true,
    sku: true,
  });
export type ExtendedProductVariant = z.infer<typeof extendedProductVariantZ>;
// type ExtendedProduct = z.infer<typeof extendedProductZ>
export const validateCartItems = async (products: CartDetails) => {
  const availableProducts: ExtendedProductVariant[] = [];
  const validatedItems: ValidatedItems[] = [];
  const inventory = await client
    .fetch(
      groq`*[_type == 'product'] {
      _id,
			_type,
        "flattened":[...variants, defaultProductVariant]{
          sku,
					_type,
          isAvailable,
          price,
          title,
          shippingRate,
        },
      blurb
      }`
    )
    .then((res) => (res ? z.array(extendedProductZ).parse(res) : []));

  inventory.forEach((product) =>
    availableProducts.push(
      ...product.flattened
        .filter((variant) => variant.isAvailable)
        .map((v) => ({
          ...v,
          description: product.blurb || "",
          sanityId: product._id || "",
        }))
    )
  );

  // loop over each key in products object and check against the available products array to see if its available
  Object.keys(products).forEach(async (id) => {
    const inventoryItem = availableProducts.find(({ sku }) => sku === id);

    if (inventoryItem === undefined) {
      throw new Error(`Invalid cart: Product with sku ${id} is not available`);
    }

    if (inventoryItem?.sku?.includes("bow")) {
      writeClient
        .patch((inventoryItem?.sanityId ?? ""), {
          set: { "defaultProductVariant.isAvailable": false },
        })
        .commit()
        .then((updatedProduct) => {
          console.log("Hurray, the product is updated! New product:");
          console.log(updatedProduct);
        })
        .catch((err) => {
          console.error("Oh no, the update failed: ", err.message);
        });
    }

    const item = {
      price_data: {
        currency: "USD",
        unit_amount: inventoryItem.price,
        tax_behavior: "exclusive",
        product_data: {
          name: products[id].name || "",
          description: products[id].description || "",
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
