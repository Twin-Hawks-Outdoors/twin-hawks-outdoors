import { json } from "@remix-run/node";

export interface Event {
  object: string;
  id: string;
  chk: string;
  access_code: string | null;
  call_to_action: string;
  created_at: number;
  currency: string;
  description: string;
  end: {
    date: string;
    formatted: string;
    iso: string;
    time: string;
    timezone: string;
    unix: number;
  };
  event_series_id: string;
  hidden: string;
  images: {
    header: string;
    thumbnail: string;
  };
  name: string;
  online_event: string;
  payment_methods: {
    external_id: string;
    id: string;
    instructions: string | null;
    name: string | null;
    type: string;
  }[];
  private: string;
  start: {
    date: string;
    formatted: string;
    iso: string;
    time: string;
    timezone: string;
    unix: number;
  };
  status: string;
  ticket_groups: any[];
  ticket_types: {
    object: string;
    id: string;
    access_code: string | null;
    booking_fee: number;
    description: string | null;
    group_id: string | null;
    max_per_order: number;
    min_per_order: number;
    name: string;
    price: number;
    status: string;
    sort_order: number;
    type: string;
    quantity: number;
    quantity_held: number;
    quantity_issued: number;
    quantity_total: number;
  }[];
  tickets_available: string;
  timezone: string;
  total_holds: number;
  total_issued_tickets: number;
  total_orders: number;
  unavailable: string;
  unavailable_status: string | null;
  url: string;
  venue: {
    name: string | null;
    postal_code: string;
  };
}

export interface EventsResponse {
  data: Event[];
  links: {
    next: string | null;
    previous: string | null;
  };
}

export const loader = async ({}) => {
  const now = Math.floor(Date.now() / 1000);

  const user = Buffer.from(process.env.TICKET_TAILOR_FRONTEND!).toString(
    "base64"
  );

  const headersList = {
    Accept: "application/json",
    Authorization: `Basic ${user}`,
  };

  try {
    const res = await fetch(
      `${process.env.TT_BASE_URL!}/v1/events?start_at.gte=${now}`,
      {
        headers: headersList,
        method: "GET",
      }
    );
    const events: EventsResponse = await res.json();

    if (!events?.data.length) {
      throw new Response("No Events Found", { status: 404 });
    }

		const truncatedEvents = events.data?.map((node) => ({
			id: node?.id,
			cta: node?.call_to_action,
			description: node?.description,
			start: node?.start,
			end: node?.end,
			venue: node?.venue,
			name: node?.name,
			url: node?.url
		}))

    return json({ events: truncatedEvents }, {headers: {
			"Cache-Control": "public, max-age=3600 s-maxage=3600"
		}});
  } catch (error) {
    throw new Response(`${error}`, { status: 500 });
  }
};
