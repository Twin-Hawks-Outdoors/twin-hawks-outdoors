import { Link } from 'gatsby';
import React from 'react';
import { SanityTraining } from '../../../graphql-types';
import Button from '../Button';

export default function TrainingExcerpt({ props }: { props: SanityTraining }) {
  return (
    <div className="card">
      <Link
        className="  outline-none group"
        to={props?.slug?.current as string}
      >
        <h4 className="m-0 group-hover:underline group-focus:underline ">
          {props?.title}
        </h4>
      </Link>
      <p className="max-w-prose mb-0">{props?.description}</p>
      <Button
        className="justify-self-end self-end"
        bgColor="teal"
        to={props?.slug?.current as string}
      >
        Learn More
      </Button>
    </div>
  );
}
