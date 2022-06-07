import { PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

export default function Success({ location }: PageProps) {
  return <Layout location={location}>Success</Layout>;
}

export async function getServerData({ query }) {
  const stripe = import('stripe')(process.env.GATSBY_STRIPE_SECRET_KEY);

  const session = await stripe.checkout.sessions.retrieve(query.session_id);

  const customer = await stripe.customers.retrieve(session.customer);
  console.log({ customer, session });
  return {
    props: {
      customer,
      session,
    },
  };
}
