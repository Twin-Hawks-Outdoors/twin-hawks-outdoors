/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import fetch from 'node-fetch';
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const now = Math.floor(Date.now() / 1000);
  const user = Buffer.from(process.env.TICKET_TAILOR_FRONTEND || '').toString(
    'base64'
  );
  const headersList = {
    Accept: 'application/json',
    Authorization: `Basic ${user}`,
  };

  try {
    const result = await fetch(
      `${process.env.TT_BASE_URL || ''}/v1/events?start_at.gte=${now}`,
      {
        headers: headersList,
        method: 'GET',
      }
    ).then((resData) => resData.json());

    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
}
