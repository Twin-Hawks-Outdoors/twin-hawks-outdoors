
import type { Event } from '~/routes/resources.getEvents';
import Button from './Button';
import { formatDate } from '~/lib/formatDate';

// type EventDataType = Record<string, string | number | boolean | null | any>;
const EventListing = ({ name,  cta, url, start, description }: Omit<Event, 'call_to_action'> & {cta: string}) => (
  <article className="bg-cream-500 rounded p-8 shadow-lg max-w-sm">
    <header>
      <h5 className="mt-0">{name}</h5>
    </header>
    <div
      dangerouslySetInnerHTML={{ __html: description }}
      className="m-0 text-black max-w-prose"
    />
    <footer className="flex justify-between gap-4 items-center mt-4">
      <h6 className="m-0">
        Date: <time dateTime={start?.date}>{formatDate(start.date, {includeTime: false})}</time>
      </h6>
      <Button to={url} bgColor="teal" className="mt-0">
        {cta}
      </Button>
    </footer>
  </article>
);

export default EventListing;
