import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client =createClient({
  projectId: 'rur2issm',
  dataset: 'development',
  apiVersion: '2022-04-19',
  token: process.env.SANITY_READ_TOKEN,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);
