import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { BlogListingsQuery, SanityPost } from '../../graphql-types';
import PostExcerpt from './modules/PostExcerpt';

function BlogList() {
  const {
    allSanityPost: { edges },
  } = useStaticQuery<BlogListingsQuery>(graphql`query BlogListings {
  allSanityPost(sort: {publishedAt: DESC}) {
    totalCount
    edges {
      node {
        id
        title
        publishedAt
        _createdAt(fromNow: true, locale: "en-US")
        excerpt
        slug {
          current
        }
      }
    }
  }
}`);

  return (
    <section className="my-32  container grid md:grid-cols-2 gap-8 place-items-center place-content-center">
      {edges?.map(({ node }) => (
        <PostExcerpt post={node as SanityPost} key={node.id} />
      ))}
    </section>
  );
}

export default BlogList;
