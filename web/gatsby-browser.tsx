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
    stripe={process.env.STRIPE_PUBLIC_KEY}
    currency="USD"
    language="en-US"
  >
    {element}
  </CartProvider>
);
