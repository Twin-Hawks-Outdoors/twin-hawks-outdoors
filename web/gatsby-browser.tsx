import * as React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import { PortableTextComponentsProvider } from '@portabletext/react';
import Layout from './src/components/Layout';
import '@fontsource/oswald';
import '@fontsource/quattrocento';
import './src/styles/global.css';
import { portableTextComponents } from './src/lib/portableTextComponents';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => (
  <PortableTextComponentsProvider components={portableTextComponents}>
    <Layout>{element}</Layout>
  </PortableTextComponentsProvider>
);
