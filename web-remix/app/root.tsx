import { cssBundleHref } from "@remix-run/css-bundle";
import { json, type LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import stylesheet from "~/styles/tailwind.css";
import oswaldStyles from "@fontsource-variable/oswald/wght.css";
import quattrocentoStyles from "@fontsource/quattrocento/400.css";
import Header from "./components/Header";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import { CartProvider } from "use-shopping-cart";
import { client } from "./sanity.server";
import groq from 'groq'
import PrettyJson from "./components/PrettyJson";
import { ImageQuery } from "./components/MainImage";
import { siteConfigZ } from "types/siteConfig";
export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: oswaldStyles },
  { rel: "stylesheet", href: quattrocentoStyles },
];

export const loader = async ({request}) => {
  const stripePublic = process.env.STRIPE_PUBLIC_KEY!;

	const data = await client
    .fetch(
      groq`*[_type == "siteConfig"][0]{
		_id,
		_type,
		title,
		url,
		logo {
			alt,
			_type,
			caption,
			${ImageQuery},
		},
		socialLinks[] {
			url,
			_key,
			platform,
			_type
		},
		mainNavigation[]->{
			_id,
			_type,
			_key,
			"title": page->title,
			"slug": slug.current,
			"page": page->title,
			disallowRobots,
			includeInSitemap
		},
		footerText,
		footerNavigation[]->{
			_id,
			_type,
			_key,
			"title": page->title,
			"slug": slug.current,
			"page": page->title,
			disallowRobots,
			includeInSitemap
		}

	}`
    )
    .then((res) =>
      res
        ? siteConfigZ.omit({ frontpage: true, blogpage: true }).parse(res)
        : null
    );

	if(!data) throw new Response("Not found", {status: 404})

  return json({ stripePublic, mainNavigation: data.mainNavigation, footerNavigation: data.footerNavigation, socialLinks: data.socialLinks,logo: data.logo, data});
};

export default function App() {
  const { stripePublic } = useLoaderData<typeof loader>();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <CartProvider
          shouldPersist={true}
          cartMode="checkout-session"
          currency="USD"
          language="en-US"
          stripe={stripePublic}
        >
          <Header />
          <AnimatePresence mode="wait">
            <Outlet />
          </AnimatePresence>
          <Footer />
        </CartProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
