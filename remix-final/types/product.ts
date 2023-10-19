import { z } from "zod";
import { categoryZ, imagePropsZ, portableTextZ } from "./shared";


export const productVariantZ = z.object({
	isAvailable: z.boolean(),
	title: z.string(),
	grams: z.number().nullish(),
	price: z.number(),
	sku: z.string(),
	taxable: z.boolean(),
	shippingRate: z.number().nullish(),
	_type: z.literal("productVariant"),
	_key: z.string().nullish(),
	images: z.array(imagePropsZ).nullish(),
})

export const productZ = z.object({
	_type: z.literal("product"),
	title: z.string(),
	_id: z.string(),
	mainImage: imagePropsZ.nullish(),
	blurb: z.string().nullish(),
	body: portableTextZ.nullish(),
	tags: z.array(z.string()).nullish(),
	defaultProductVariant: productVariantZ,
	variants: z.array(productVariantZ).nullish(),
	categories: z.array(categoryZ.nullish()).nullish(),
	"slug": z.string().nullish(),
})


export const productExcerptZ = productZ.pick({
	_type: true,
	title:	true,
	_id: true,
	mainImage: true,
	blurb: true,
	defaultProductVariant: true,
	variants: true,
	slug: true
})

export type ProductDoc = z.infer<typeof productZ>
export type ProductVariant = z.infer<typeof productVariantZ>
