import {createClient} from '@sanity/client';


export const client =createClient({
  projectId: 'rur2issm',
  dataset: 'development',
  apiVersion: '2022-04-19',
  token: process.env.SANITY_READ_TOKEN,
  useCdn: true,
});

