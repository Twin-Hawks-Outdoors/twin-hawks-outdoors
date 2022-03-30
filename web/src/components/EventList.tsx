import React from 'react';
import EventListing from './EventListing';

function EventList() {
  return (
    <section className=" bg-gradient-to-br from-teal-900  to-teal-400 grid py-24">
      <h3 className="container mx-auto col-span-full mt-0 mb-16 text-white">
        Upcoming Events
      </h3>
      <div className="container mx-auto  col-span-full flex gap-8 flex-wrap justify-center">
        <EventListing />
        <EventListing />
        <EventListing />
      </div>
    </section>
  );
}

export default EventList;
