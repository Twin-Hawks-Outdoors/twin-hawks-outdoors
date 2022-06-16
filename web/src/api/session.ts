/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';
import { Stripe } from 'stripe';
import { CartDetails } from 'use-shopping-cart/core';
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

  // reduce the line items array and add all shippingRates together
  const shippingRate = lineItems?.reduce((prev, curr) => {
    console.log({ prev, curr });

    const shippingTotal: number =
      curr?.price_data?.product_data?.metadata.shippingTotal;
    return prev + shippingTotal;
    // const prevShippingRate: number =
    //   prev?.product_data?.metadata?.shippingTotal;
    // const currShippingRate: number =
    //   curr?.product_data?.metadata?.shippingTotal;
    // return prevShippingRate + currShippingRate;
  }, 0);

  console.log(shippingRate);
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
              amount: shippingRate || 0,
              currency: 'USD',
            },
          },
        },
      ],
      mode: 'payment',
      success_url: `${
        process.env.GATSBY_DOMAIN || ''
      }/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.GATSBY_DOMAIN || ''}/shop`,
      line_items: lineItems as Stripe.Checkout.SessionCreateParams.LineItem[],
    });
    const sessionId = session.id;
    return res.status(200).json({ sessionId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'There was an error', error });
  }
}
