import React from 'react';
import { EventData } from '../../global';
import Button from './Button';

const EventListing = ({ title, cta, url, start, description }: EventData) => (
  <article className="bg-cream-500 rounded p-8 shadow-lg max-w-sm">
    <header>
      <h5 className="mt-0">{title}</h5>
    </header>
    <div
      dangerouslySetInnerHTML={{ __html: description }}
      className="m-0 text-black max-w-prose"
    />
    <footer className="flex justify-between gap-4 items-center mt-4">
      <h6 className="m-0">
        Date: <time dateTime="2020-01-01">{start}</time>
      </h6>
      <Button to={url} bgColor="teal" className="mt-0">
        {cta}
      </Button>
    </footer>
  </article>
);

export default EventListing;
