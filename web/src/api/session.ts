import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';
import groq from 'groq';
import { client } from '../lib/sanityClient';
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable camelcase */

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || '');

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const inventory = await client.fetch(groq`*[_type == "product" ]{
    _id,
    defaultProductVariant,
    variants[]->
  }`);
  console.log(inventory);
  try {
    // const lineItems = validateCartItems(inventory, req.body);

    const session = await stripe.checkout.sessions.create({
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: ['US'],
      },
      mode: 'payment',
      success_url: `${process.env.GATSBY_DOMAIN}/success`,
      cancel_url: process.env.GATSBY_DOMAIN,
      line_items: lineItems,
    });
    const sessionId = session.id;
    console.log(sessionId);
    return res.status(200).json({ sessionId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'There was an error', error });
  }
}
// res.status(200).json({ sessionId: session.id });

// console.log(session);

// return {
//   statusCode: 302,
//   headers: {
//     Location: session.url,
//   },
//   body: '',
// };

// let product;
// try {
//   product = JSON.parse(req.body);
// } catch (error) {
//   return {
//     statusCode: 400,
//     body: JSON.stringify({
//       message: 'Received malformed JSON.',
//       error: error.message,
//     }),
//   };
// }

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
