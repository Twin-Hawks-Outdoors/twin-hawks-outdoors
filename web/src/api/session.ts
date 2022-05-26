import console from 'console';
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';
import { CartEntry, CartDetails } from 'use-shopping-cart/core';
import { Stripe } from 'stripe';
import { validateCartItems } from '../lib/validateCartItems';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2020-08-27',
});

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable camelcase */

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  let lineItems;
  try {
    lineItems = await validateCartItems(req.body as CartDetails);
  } catch (error) {
    console.log(error);
  }

  try {
    const session = await stripe.checkout.sessions.create({
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: ['US'],
      },
      tax_id_collection: {
        enabled: true,
      },
      automatic_tax: {
        enabled: true,
      },
      phone_number_collection: { enabled: true },
      shipping_options: [
        {
          shipping_rate_data: {
            display_name: 'Standard Shipping',
            type: 'fixed_amount',

            tax_behavior: 'exclusive',
            tax_code: 'txcd_92010001',
            delivery_estimate: {
              maximum: {
                unit: 'business_day',
                value: 15,
              },
              minimum: {
                unit: 'business_day',
                value: 5,
              },
            },
            fixed_amount: {
              amount: 5000,
              currency: 'USD',
            },
          },
        },
        {
          shipping_rate_data: {
            tax_behavior: 'exclusive',
            tax_code: 'txcd_92010001',
            display_name: 'Expedited Shipping',
            type: 'fixed_amount',
            delivery_estimate: {
              maximum: {
                unit: 'business_day',
                value: 7,
              },
              minimum: {
                unit: 'business_day',
                value: 3,
              },
            },
            fixed_amount: {
              amount: 10000,
              currency: 'USD',
            },
          },
        },
      ],
      mode: 'payment',
      success_url: `${process.env.GATSBY_DOMAIN || ''}/success`,
      cancel_url: process.env.GATSBY_DOMAIN || '',
      line_items: lineItems as Stripe.Checkout.SessionCreateParams.LineItem[],
    });
    const sessionId = session.id;
    console.log(sessionId);
    return res.status(200).json({ sessionId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'There was an error', error });
  }
}

// let line_items;
// try {
//   // line_items = validateCartItems(inventory, product);
// } catch (error) {
//   return {
//     statusCode: 422,
//     body: JSON.stringify({
//       message: 'Some of the items in your cart are invalid.',
//       error: error.message,
//     }),
//   };
// }

// let session;
// try {
//   session = await stripe.checkout.sessions.create({
//     billing_address_collection: 'auto',
//     shipping_address_collection: {
//       allowed_countries: ['US'],
//     },
//     mode: 'payment',
//     success_url: `${process.env.URL}/success.html`,
//     cancel_url: process.env.URL,
//     line_items,
//   });
// } catch (error) {
//   return {
//     statusCode: 500,
//     body: JSON.stringify({
//       message: 'While communicating with Stripe, we encountered an error.',
//       error: error.message,
//     }),
//   };
// }

// return {
//   statusCode: 200,
//   body: JSON.stringify({ sessionId: session.id }),
// };
