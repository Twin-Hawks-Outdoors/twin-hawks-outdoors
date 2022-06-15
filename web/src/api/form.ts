/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import sanityClient from '@sanity/client';
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';
import sgMail from '@sendgrid/mail';

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

  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

  const template = `
    <div>
      <h1>New Form Submission</h1>
      <p><strong>Name: </strong>${data?.fullName}</p>
      <p><strong>Email: </strong><a href="mailto:${data?.email}">${data?.email}</a></p>
      <p><strong>Phone: </strong><a href="tel:+1${data?.phone}">${data?.phone}</a></p>
      <p><strong>message: </strong>${data?.message}</p>
    </div>
  `;

  const msg = {
    to: 'sam@twinhawksoutdoors.com',
    from: 'sam@twinhawksoutdoors.com',
    replyTo: data?.email,
    subject: `New contact from submission from ${data.fullName}`,
    text: `${data.message}`,
    html: template,
  };

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

    sgMail
      .send(msg)
      .then((response) => {
        console.log(response[0].statusCode);
        console.log(response[0].headers);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: `Error sending email.` });
      });

    return res.status(200).json({ message: 'Thanks for your message!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'There was an error', error });
  }
}
