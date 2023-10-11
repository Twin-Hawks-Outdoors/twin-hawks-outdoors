import { z } from "zod";

export const popupZ = z.object({
	_id: z.string(),
	_type: z.literal("popup"),
	name: z.string(),
	streetAddress: z.string(),
	city: z.string(),
	state: z.string(),
	zipcode: z.string(),
	openingHours: z.object({
		from: z.string().datetime(),
		to: z.string().datetime(),
	})
})
