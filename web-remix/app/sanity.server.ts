import { createClient } from "@sanity/client";

export const client = createClient({
	perspective: "published",
	projectId: process.env.SANITY_PROJECT_ID ?? "rur2issm",
	dataset: process.env.SANITY_DATASET ?? "development",
	token: process.env.SANITY_READ_TOKEN,
	useCdn: true,
	apiVersion: "2022-10-01",
})
