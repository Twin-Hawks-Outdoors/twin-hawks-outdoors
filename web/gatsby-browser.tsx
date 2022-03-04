import * as React from 'react'
import Layout from './src/components/Layout'
import "@fontsource/oswald"
import "@fontsource/quattrocento";
import type { GatsbyBrowser } from "gatsby";
import "./src/styles/global.css"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return (
    <Layout>
      {element}
    </Layout>
  );
};
