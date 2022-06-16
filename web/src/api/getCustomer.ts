import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';
import { Stripe } from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2020-08-27',
});
export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const seshId = JSON.parse(req.body) as string;
  try {
    const session = await stripe.checkout.sessions.retrieve(seshId);

    const lineItems = await stripe.checkout.sessions.listLineItems(seshId, {
      limit: 20,
    });

    const customer = await stripe.customers.retrieve(
      session?.customer as string
    );

    console.log(lineItems);

    return res.status(200).json({ customer, lineItems });
  } catch (error) {
    return res.status(500).json({ message: 'There was an error', error });
  }
}
