import { z } from "zod";
import { imagePropsZ } from "./shared";

export const productExcerptZ = z.object({
	_type: z.literal("product"),
	title: z.string(),
	_id: z.string(),
	image: imagePropsZ.nullish(),
	blurb: z.string().nullish(),
})
