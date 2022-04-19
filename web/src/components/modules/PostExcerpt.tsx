import { Link } from 'gatsby';
import React from 'react';
import { SanityPost } from '../../../graphql-types';
import Button from '../Button';

function PostExcerpt({ post }: { post: SanityPost }) {
  const { title, excerpt, slug, _createdAt } = post;
  return (
    <article className="card">
      <Link className="  outline-none group" to={slug?.current as string}>
        <h4 className="m-0 group-hover:underline group-focus:underline ">
          {title}
        </h4>
      </Link>
      <small className="text-red-500 mb-2 inline-block">
        Posted {_createdAt}
      </small>
      <hr />
      {excerpt && <p className="mt-2 mb-0">{excerpt}</p>}
      <Button
        className="button-sm my-0 justify-self-start"
        bgColor="teal"
        to={slug?.current as string}
      >
        Read more
      </Button>
    </article>
  );
}

export default PostExcerpt;
