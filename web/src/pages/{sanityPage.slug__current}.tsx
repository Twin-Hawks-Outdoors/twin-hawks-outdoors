import { graphql, PageProps, StaticQueryDocument } from 'gatsby';
import React from 'react';
import loadable from '@loadable/component';
import { SanityPageQueryQuery } from '../../graphql-types';
import PrettyJson from '../components/PrettyJson';

const SanityPage = (props: PageProps<SanityPageQueryQuery>) =>
  props?.data?.sanityPage?.content?.map((element) => {
    const typename = element?.__typename.replace('Sanity', '');
    console.log(typename);
    const Component = loadable(
      () => import(`../components/modules/${typename}`)
    );

    return (
      <Component
        props={{ ...element, location }}
        key={element._key}
        location={location}
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
      }
    }
  }
`;
