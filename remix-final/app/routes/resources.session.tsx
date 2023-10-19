import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { CartDetails } from "use-shopping-cart/core";
import { Stripe } from "stripe";
import { validateCartItems } from "~/lib/validateCartItems";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-08-16",
});
export const action = async ({ request }: ActionFunctionArgs) => {

  const formData = await request.formData();
  const cartData = JSON.parse(formData.get("body") as string) as CartDetails;

  let lineItems;
  try {
    lineItems = await validateCartItems(cartData);
  } catch (error) {
    console.log(error);
  }
  // reduce the line items array and all all shippingRates together
  const shippingRates = lineItems?.reduce((acc, item) => {
    const shippingTotal =
      item.price_data.product_data.metadata.shippingTotal ?? 0;
    return acc + shippingTotal;
  }, 0);

  try {
    const session = await stripe.checkout.sessions.create({
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      tax_id_collection: {
        enabled: true,
      },
      automatic_tax: {
        enabled: true,
      },
      phone_number_collection: {
        enabled: true,
      },
      shipping_options: [
        {
          shipping_rate_data: {
            display_name: "Standard Shipping",
            type: "fixed_amount",

            tax_behavior: "exclusive",
            tax_code: "txcd_92010001",
            delivery_estimate: {
              maximum: {
                unit: "business_day",
                value: 15,
              },
              minimum: {
                unit: "business_day",
                value: 5,
              },
            },
            fixed_amount: {
              amount: shippingRates || 0,
              currency: "USD",
            },
          },
        },
      ],
      mode: "payment",
      success_url: `${process.env.BASE_URL}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL}/shop/`,
      line_items: lineItems as Stripe.Checkout.SessionCreateParams.LineItem[],
    });
    const sessionId = session.id;
    return json({ sessionId });
  } catch (error) {
    throw new Response(JSON.stringify(error, null, 2), { status: 500 });
  }
};
