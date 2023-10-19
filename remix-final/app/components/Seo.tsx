import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { SeoQuery } from '../../graphql-types';

type SeoProps = {
  description?: string;
  title?: string;
  pathname?: string;
  ogImage?: string;
};

export const Seo = ({
  description,
  title = '',
  pathname = '/',
  ogImage = '',
}: SeoProps) => {
  const { sanitySiteConfig } = useStaticQuery<SeoQuery>(graphql`
    query Seo {
      sanitySiteConfig {
        url
        title
        frontpage {
          description
          openGraphImage {
            asset {
              url
            }
          }
        }
      }
    }
  `);
  const metaDescription =
    description || sanitySiteConfig?.frontpage?.description || '';
  const ogImageLink =
    ogImage || sanitySiteConfig?.frontpage?.openGraphImage?.asset?.url || '';
  return (
    <Helmet
      htmlAttributes={{ lang: 'en-US' }}
      title={title}
      titleTemplate={`%s - ${sanitySiteConfig?.title || ''}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: ogImageLink,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        pathname.includes('success')
          ? {
              name: `robots`,
              content: `noindex, follow`,
            }
          : {},
      ]}
    />
  );
};
