import * as React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import Layout from './src/components/Layout';
import '@fontsource/oswald';
import '@fontsource/quattrocento';
import './src/styles/global.css';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => <Layout>{element}</Layout>;
