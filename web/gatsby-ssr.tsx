
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
  <>
    <Header />
    <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
    <Footer />
  </>
);

export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => (
  <CartProvider
    shouldPersist={true}
    cartMode="checkout-session"
    stripe="pk_live_51KqkieG4U9OV224rlqfjAPWSZpMZkzwMIE3zxRMHdNwvDrBoXSVxn5M0anMKPOcbJrZwbVNgpro9cVoi3FxTr4O800fmqMcNuG"
    currency="USD"
    language="en-US"
  >
    {element}
  </CartProvider>
);
