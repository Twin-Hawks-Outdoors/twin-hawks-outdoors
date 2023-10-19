import { json, redirect } from "@remix-run/node";
import type { DataFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import groq from "groq";
import { useEffect } from "react";
import Stripe from "stripe";
import { imagePropsZ } from "types/shared";
import { siteConfigZ } from "types/siteConfig";
import { useShoppingCart } from "use-shopping-cart";
import { z } from "zod";
import Layout from "~/components/Layout";
import { ImageQuery } from "~/components/MainImage";
import { builder, client } from "~/sanity.server";
export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: `Order Confirmation | ${data?.meta?.title || ""} ` },
    {
      name: "description",
      content: "Thanks for your purchase!",
    },
    {
      name: "og:image",
      content: data?.ogImage || "",
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:title`,
      content: `Order Confirmation | ${data?.meta?.title || ""}`,
    },
    {
      name: `twitter:description`,
      content: "Thanks for your purchase!",
    },
    {
      name: "robots",
      content: "noindex, follow",
    },
  ];
};

export const loader = async ({ request, params }: DataFunctionArgs) => {
  const meta = await client
    .fetch(
      groq`*[ _type == "siteConfig"][0] {
		title,
		frontpage->{
			openGraphImage {
				${ImageQuery}
			}
		}
	}`
    )
    .then((res) =>
      res
        ? siteConfigZ
            .omit({ frontpage: true })
            .pick({ title: true })
            .extend({
              frontpage: z.object({
                openGraphImage: imagePropsZ.nullish(),
              }),
            })
            .parse(res)
        : null
    );

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2023-10-16",
  });

  const query = new URL(request.url).searchParams.get("session_id") || "";

  const session = await stripe.checkout.sessions.retrieve(query);

  if (!session || !meta) {
    return redirect("/shop/");
  }

  const lineItems = await stripe.checkout.sessions.listLineItems(query, {
    limit: 20,
  });

  const customerDeets = session.customer_details;

  const ogImage = builder
    .image(meta.frontpage?.openGraphImage ?? {})
    .auto("format")
    .quality(60)
    .width(1200)
    .height(627)
    .crop("focalpoint")
    .url();
  return json(
    {
      lineItems,
      customerDeets,
      meta,
      ogImage,
    },
    {
      headers: {
        "Cache-Control": "no-store ",
      },
    }
  );
};
export default function OrderSuccessRoute() {
  const { clearCart } = useShoppingCart();
  useEffect(() => {
    clearCart();
  }, [clearCart]);
  const { lineItems, customerDeets } = useLoaderData<typeof loader>();
  return (
    <Layout>
      <section className="container mx-auto min-h-[80vh] flex flex-col items-center justify-center">
        <h1 className="text-xl">
          Thanks for your purchase {customerDeets?.name}
        </h1>
        <div className="grid gap-8 mb-8 md:grid-cols-2">
          <div>
            <h6 className="mb-0">Ship To:</h6>
            <p className="flex">
              {customerDeets?.address?.line1}
              <br />
              {customerDeets?.address?.line2}
              {customerDeets?.address?.line2 && <br />}
              {customerDeets?.address?.city}, {customerDeets?.address?.state}{" "}
              {customerDeets?.address?.postal_code}
            </p>
          </div>
          <div className="">
            <h6>Items to ship:</h6>
            <ul>
              {lineItems?.data?.map((item) => (
                <li key={item.id}>
                  {item?.quantity} - {item?.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p>
          Keep an eye out in your inbox{" "}
          <span className="font-bold">({customerDeets?.email})</span> for
          updates regarding shipping, receipts, etc.
        </p>
      </section>
    </Layout>
  );
}
