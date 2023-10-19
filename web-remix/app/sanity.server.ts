
import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'
export const client = createClient({
	perspective: "published",
	projectId: process.env.SANITY_PROJECT_ID ?? "rur2issm",
	dataset: process.env.SANITY_DATASET ?? "development",
	token: process.env.SANITY_READ_TOKEN,
	useCdn: true,
	apiVersion: "2022-10-01",
})

export const writeClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID ?? "rur2issm",
  dataset: process.env.SANITY_DATASET ?? "development",
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
  apiVersion: "2022-10-01",
});

export const builder = imageUrlBuilder(client);
