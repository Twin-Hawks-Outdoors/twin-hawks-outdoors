import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import {clsx, type ClassValue } from 'clsx';
import {twMerge} from 'tailwind-merge'
import { client } from '~/sanity.server';
import imageUrlBuilder from "@sanity/image-url";
// import { client } from './sanityClient';
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);
