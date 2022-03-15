import { graphql, PageProps } from 'gatsby';
import React from 'react';
import PrettyJson from '../components/PrettyJson';

const SanityPage = (props: PageProps) => (
  <div>
    <PrettyJson data={props} />
  </div>
);

export default SanityPage;

export const query = graphql`
  query SanityPageQuery($id: String) {
    sanityPage(id: { eq: $id }) {
      title
      slug {
        current
      }
    }
  }
`;
