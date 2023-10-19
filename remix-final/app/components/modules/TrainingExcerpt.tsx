
import Button from '../Button';
import type { z } from 'zod';
import type { trainingExcerptZ } from 'types/training';
import { Link } from '@remix-run/react';
import groq from 'groq';

export const TrainingExcerptQuery = groq`
	_type == "training" => {
		_type,
		_key,
		"slug": slug.current,
		title,
		description,
		_id
	}
`

export  function TrainingExcerpt({slug, title, description}: z.infer<typeof trainingExcerptZ>) {
  return (
    <div className="card">
      <Link
        className="  outline-none group"
        to={slug}
      >
        <h4 className="m-0 group-hover:underline group-focus:underline ">
          {title}
        </h4>
      </Link>
      <p className="max-w-prose mb-0">{description}</p>
      <Button
        className="justify-self-end self-end"
        bgColor="teal"
        to={slug}
      >
        Learn More
      </Button>
    </div>
  );
}
