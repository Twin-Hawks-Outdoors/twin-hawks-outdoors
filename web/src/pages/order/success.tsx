import { Stripe } from '@stripe/stripe-js';
import { GetServerDataProps, GetServerDataReturn, PageProps } from 'gatsby';
import React, { useEffect } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import Layout from '../../components/Layout';

interface Address {
  city: string;
  country: string;
  line1: string;
  line2?: string;
  postal_code: string;
  state: string;
}

interface LineItem {
  id: string;
  object: string;
  amount_subtotal: number;
  amount_total: number;
  currency: string;
  description: string;
  price: {
    id: string;
    object: string;
    active: boolean;
    billing_scheme: string;
    created: number;
    currency: string;
    livemode: boolean;
    lookup_key?: string;
    metadata: {};
    nickname?: string;
    product: string;
    recurring?: boolean;
    tax_behavior: string;
    tiers_mode?: null;
    transform_quantity?: boolean;
    type: string;
    unit_amount: number;
    unit_amount_decimal?: string;
  };
  quantity: number;
}

interface LineItems {
  object: string;
  data: LineItem[];
  has_more: boolean;
  url: string;
}
interface Customer {
  id: string;
  object?: string;
  address: Address;
  balance: number;
  created: number;
  currency: string | null;
  default_source: string;
  delinquent: boolean;
  discount: null;
  email: string;
  invoice_prefix: string;
  invoice_settings: {
    custom_fields: null;
    default_payment_method: null;
    footer: null;
  };
  livemode: boolean;
  metadata: any;
  name: string;
  next_invoice_sequence: number;
  phone: string;
  preferred_locales: string[];
  shipping: {
    address: Address;
    name: string;
    phone: null | string;
  };
  tax_exempt: string;
  test_clock: null | number | string;
}

export default function Success({ location, serverData }: PageProps) {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    clearCart();
  }, []);
  return (
    <Layout location={location}>
      <section className="container mx-auto">
        <h1 className="text-xl">
          Thanks for your purchase {serverData?.customer.name}
        </h1>
        <div>
          <h6 className="mb-0">Ship To:</h6>
          <p className="flex">
            {serverData?.customer?.shipping?.address?.line1}
            <br />
            {serverData?.customer?.shipping?.address?.line2}
            {serverData?.customer?.shipping?.address?.line2 && <br />}
            {serverData?.customer?.shipping?.address?.city},{' '}
            {serverData?.customer?.shipping?.address?.state}{' '}
            {serverData?.customer?.shipping?.address?.postal_code}
          </p>
        </div>
        <h6>Items to ship:</h6>
        <ul>
          {serverData?.lineItems?.data?.map((item) => (
            <li key={item.id}>
              {item?.quantity} - {item?.description}
            </li>
          ))}
        </ul>
        <p>
          Keep an eye out in your inbox ({serverData?.customer?.email}) for
          updates regarding shipping, receipts, etc.
        </p>
      </section>
    </Layout>
  );
}

export async function getServerData({
  query,
}: GetServerDataProps): GetServerDataReturn<null | {
  customer: Customer;
  lineItems: LineItems;
}> {
  const res = await fetch(
    `${process.env.GATSBY_DOMAIN || ''}/api/getCustomer`,
    {
      method: 'POST',
      body: JSON.stringify(query?.session_id),
    }
  );

  const { customer, lineItems } = (await res.json()) as {
    customer: Customer;
    lineItems: LineItems;
  };
  return {
    props: {
      customer,
      lineItems,
    },
  };
}
