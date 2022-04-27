import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';
import fetch from 'node-fetch';

interface EventBody {
  events: any;
}

export default async function handler(
  req: GatsbyFunctionRequest<EventBody>,
  res: GatsbyFunctionResponse
) {
  const now = Math.floor(Date.now() / 1000);
  const user = Buffer.from(process.env.TICKET_TAILOR_FRONTEND).toString(
    'base64'
  );
  const headersList = {
    Accept: 'application/json',
    Authorization: `Basic ${user}`,
  };

  try {
    const result = await fetch(
      `${process.env.TT_BASE_URL}/v1/events?start_at.gte=${now}`,
      {
        headers: headersList,
        method: 'GET',
      }
    ).then((res) => res.json());
  } catch (error) {
    res.status(500).send(error);
  }
}
