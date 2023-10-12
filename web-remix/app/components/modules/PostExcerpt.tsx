/* eslint-disable @typescript-eslint/naming-convention */

import React from 'react';
import Button from '../Button';
import type { PostExcerpt as PostExcerptDoc } from 'types/post';
import { Link } from '@remix-run/react';
import { formatDate } from '~/lib/formatDate';

export function PostExcerpt({ title,_id,_createdAt, slug,author, excerpt }: PostExcerptDoc) {
  return (
    <article className="card">
      <Link prefetch='intent' className="  outline-none group" to={slug}>
        <h4 className="m-0 group-hover:underline group-focus:underline ">
          {title}
        </h4>
      </Link>
      <small className="text-red-500 mb-2 inline-block">
        Posted {formatDate(_createdAt)}
      </small>
      <hr />
      {excerpt && <p className="mt-2 mb-0">{excerpt}</p>}
      <Button
        className="button-sm my-0 justify-self-start"
        bgColor="teal"
        to={slug}
      >
        Read more
      </Button>
    </article>
  );
}

export default PostExcerpt;
