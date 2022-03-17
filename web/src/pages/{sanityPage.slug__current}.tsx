import { graphql, PageProps, StaticQueryDocument } from 'gatsby';
import React from 'react';
import loadable from '@loadable/component';
import { SanityPageQueryQuery } from '../../graphql-types';
import PrettyJson from '../components/PrettyJson';

const SanityPage = ({ data, location }: PageProps<SanityPageQueryQuery>) =>
  data?.sanityPage?.content?.map((element, idx) => {
    const typename = element?.__typename.replace('Sanity', '');

    const Component = loadable(
      () => import(`../components/modules/${typename as string}`)
    );

    return (
      <Component
        props={{ ...element, location }}
        key={(element?._key as string) || idx}
      />
    );
  });

export default SanityPage;

export const query: StaticQueryDocument = graphql`
  query SanityPageQuery($id: String) {
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
      }
    }
  }
`;
