import type { GatsbyConfig } from "gatsby";
import path from "path";
const config: GatsbyConfig = {
  siteMetadata: {
    title: "Twin Hawks Outdoors",
    siteUrl: "https://www.twinhawksoutdoors.com",
  },
  plugins: [
    `gatsby-plugin-graphql-codegen`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "rur2issm",
        dataset: "development",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: path.resolve("src/images/icon.png"),
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.resolve("src/images/"),
      },
    },
    `gatsby-plugin-postcss`,
  ],
};

export default config;
