import { PortableTextComponentsProvider } from "@portabletext/react";
import { AnimatePresence } from "framer-motion";
import { CartProvider } from "use-shopping-cart";
import Header from "./src/components/Header";
import { portableTextComponents } from "./src/lib/portableTextComponents";
import React from 'react'
import { GatsbySSR } from "gatsby";
import Footer from "./src/components/Footer";
export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({
  element,
}) => (
  <PortableTextComponentsProvider components={portableTextComponents}>
    <Header />
    <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
    <Footer />
  </PortableTextComponentsProvider>
);

export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({
  element,
}) => (
  <CartProvider
    cartMode="checkout-session"
    stripe={process.env.STRIPE_PUBLIC_KEY || ""}
    currency="USD"
    language="en-US"
  >
    {element}
  </CartProvider>
);
