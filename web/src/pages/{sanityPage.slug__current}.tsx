/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { graphql } from 'gatsby';
import type { PageProps, StaticQueryDocument } from 'gatsby';
import React from 'react';
import { SanityPageQueryQuery } from '../../graphql-types';
import Layout from '../components/Layout';

const LazyBlogList = React.lazy(() => import('../components/BlogList'));

const SanityPage = ({
  data,
  location,
  pageContext,
}: PageProps<SanityPageQueryQuery, { id: string }>) => {
  const modules = data?.sanityPage?.content?.map((element, idx) => {
    const typename = element?.__typename.replace('Sanity', '');

    const Component = React.lazy(
      () => import(`../components/modules/${typename as string}`)
    );


    return (
      <Component
        props={{ ...element, location }}
        key={(element?._key as string) || idx}
      />
    );
  });

  return (
    <React.Suspense fallback="Loading...">
      <Layout>
        {modules}
        {data?.sanitySiteConfig?.blogpage?.id === pageContext?.id && (
          <LazyBlogList />
        )}
      </Layout>
    </React.Suspense>
  );
};

export default SanityPage;

export const query: StaticQueryDocument = graphql`
  query SanityPageQuery($id: String) {
    sanitySiteConfig {
      blogpage {
        id
      }
    }
    sanityPage(id: { eq: $id }) {
      title

      slug {
        current
      }
      content {
        __typename
        ...SanityHero
        ...SanityCardSection
        ...SanityGallerySection
        ...SanityTextWithImageSection
        ...SanityTextSection
        ...SanityUiComponentRef
        ...SanityCtaSection
      }
    }
  }
`;
