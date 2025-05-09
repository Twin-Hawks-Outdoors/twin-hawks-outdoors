/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useFetcher } from '@remix-run/react';
import React, { useEffect } from 'react';
import type { Event } from '~/routes/resources.getEvents';
import EventListing from './EventListing';

// type EventDataType = Record<string, string | number | boolean | null | any>;

export function EventList() {
	const eventFetcher = useFetcher<Promise<{events: Event[]}>>()

	const events = eventFetcher.data?.events ?? []
  useEffect(() => {
		if(eventFetcher.state === "idle" && eventFetcher.data == null) {
			eventFetcher.load('/resources/getEvents')
		}


  }, [eventFetcher]);


  return (
    <section className=" bg-gradient-to-br from-teal-900  to-teal-400 grid py-24">
      <h3 className="container mx-auto col-span-full mt-0 mb-16 text-white">
        Upcoming Events
      </h3>
      <div className="container mx-auto  col-span-full flex gap-8 flex-wrap justify-center">
        
        {events?.map((event) => (
          <EventListing key={event?.id} {...event} />
        ))}
        {events?.length < 1 && (
          <p className="text-white">No upcoming events scheduled yet..</p>
        )}
      </div>
    </section>
  );
}

export default EventList;
