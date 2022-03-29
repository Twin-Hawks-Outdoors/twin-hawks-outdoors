import React from 'react';
import Button from './Button';

const EventListing = () => (
  <article className="bg-cream-500 rounded p-8 shadow-lg max-w-sm">
    <header>
      <h5 className="mt-0">Event Title</h5>
    </header>
    <p className="m-0 text-black max-w-prose">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum qui eaque
      quasi necessitatibus suscipit sequi corrupti! Enim optio similique
      accusamus.
    </p>
    <footer className="flex justify-between items-center mt-4">
      <h6 className="m-0">
        Date: <time dateTime="2020-01-01">2020-01-01</time>
      </h6>
      <Button to="/" bgColor="teal" className="mt-0">
        Register
      </Button>
    </footer>
  </article>
);

export default EventListing;
