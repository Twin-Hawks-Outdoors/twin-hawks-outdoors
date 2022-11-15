import * as React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import { PortableTextComponentsProvider } from '@portabletext/react';
import { AnimatePresence } from 'framer-motion';
import '@fontsource/oswald';
import '@fontsource/quattrocento';
import './src/styles/global.css';
import { CartProvider } from 'use-shopping-cart';
import { portableTextComponents } from './src/lib/portableTextComponents';
import Header from './src/components/Header';
import Footer from './src/components/Footer';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => (
  <PortableTextComponentsProvider components={portableTextComponents}>
    <Header />
    <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
    <Footer />
  </PortableTextComponentsProvider>
);

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => (
  <CartProvider
    cartMode="checkout-session"
    stripe={"pk_live_51KqkieG4U9OV224rlqfjAPWSZpMZkzwMIE3zxRMHdNwvDrBoXSVxn5M0anMKPOcbJrZwbVNgpro9cVoi3FxTr4O800fmqMcNuG"}
    currency="USD"
    language="en-US"
  >
    {element}
  </CartProvider>
);
