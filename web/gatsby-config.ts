import type { GatsbyConfig } from 'gatsby';
import path from 'path';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});


const config: GatsbyConfig = {
	trailingSlash: 'always',
  siteMetadata: {
    title: 'Twin Hawks Outdoors',
    siteUrl: 'https://www.twinhawksoutdoors.com',
  },
  plugins: [
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-plugin-graphql-codegen`,

      options: {
        codegenDelay: 2000,
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'rur2issm',
        dataset: 'development',
        watchMode: process.env.NODE_ENV === 'development',
        token: process.env.SANITY_READ_TOKEN,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: path.resolve('src/images/favicon.png'),
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.resolve('src/images/'),
      },
    },
    `gatsby-plugin-postcss`,
  ],
};

export default config;
