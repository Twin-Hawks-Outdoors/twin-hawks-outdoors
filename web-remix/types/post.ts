import { z } from "zod"
import { categoryZ, imagePropsZ, personZ } from "./shared"

export const postZ = z.object({
	_type: z.literal("post"),
	_id: z.string(),
	title: z.string(),
	author: personZ.nullish(),
	mainImage: imagePropsZ.nullish(),
	categories: z.array(categoryZ),
	slug: z.string(),
	publishedDate: z.string().datetime(),
	excerpt: z.string().nullish(),
	body: z.array(z.any()).nullish(),
})

export const postExcerptZ = postZ.pick({
	_id: true,
	title: true,
	slug: true,
	_type: true,
	publishedDate: true,
	excerpt: true,
	author: true,
	mainImage: true,
})
