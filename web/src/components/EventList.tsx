import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import EventListing from './EventListing';

function EventList() {
  return (
    <section className=" bg-gradient-to-br from-teal-900  to-teal-400 grid">
      <div className="container mx-auto py-24 col-start-1 row-start-1 col-span-full flex gap-8 flex-wrap justify-center">
        <EventListing />
        <EventListing />
        <EventListing />
      </div>
    </section>
  );
}

export default EventList;
