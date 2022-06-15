/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import sanityClient from '@sanity/client';
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';

interface FormSubmission {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  'got-ya'?: string;
}
export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const data: FormSubmission = req.body as FormSubmission;

  const client = sanityClient({
    projectId: 'rur2issm',
    dataset: 'development',
    apiVersion: '2022-04-19',
    token: process.env.SANITY_WRITE_TOKEN,
    useCdn: false,
  });

  try {
    if (data['got-ya']?.length) {
      res.status(500).json({ message: `We don't take kindly to spammers.` });
    }

    await client.create({
      _type: 'formSubmission',
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      message: data.message,
    });

    return res.status(200).json({ message: 'Thanks for your message!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'There was an error', error });
  }
}
