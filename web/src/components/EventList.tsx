/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from 'react';
import { EventData } from '../../global';
import EventListing from './EventListing';

type EventDataType = Record<string, string | number | boolean | null | any>;

function EventList() {
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect(() => {
    const getUpcomingEvents = async () => {
      const response = await fetch('../api/get-upcoming-events', {
        method: 'GET',
      });

      const { data }: { data: Record<string, any>[] } = await response.json();

      const truncatedData = data.map((node: EventDataType) => ({
        id: node?.id,
        cta: node?.call_to_action,
        description: node?.description,
        start: node?.start?.date,
        title: node?.name,
        url: node?.url,
      }));

      setEvents(truncatedData);
    };
    getUpcomingEvents();
  }, []);

  const sortedEvents = events.sort((a, b) => {
    if (a.start < b.start) {
      return -1;
    }
    return 1;
  });

  console.log(sortedEvents);

  return (
    <section className=" bg-gradient-to-br from-teal-900  to-teal-400 grid py-24">
      <h3 className="container mx-auto col-span-full mt-0 mb-16 text-white">
        Upcoming Events
      </h3>
      <div className="container mx-auto  col-span-full flex gap-8 flex-wrap justify-center">
        {events?.map((event: EventData) => (
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
