import type { PortableTextBlock } from "sanity";
import { z } from "zod";


export const portableTextZ: z.ZodType<PortableTextBlock> = z.any();
export const figureZ = z.object({})
export const extendedImageZ = z.object({
  _id: z.string().nullish(),
  _key: z.string().nullish(),
  _type: z.string().nullish(),
  url: z.string().nullish(),
  alt: z.string().nullish(),
  caption: z.string().nullish(),
  asset: z.object({
    _id: z.string(),
    altText: z.string().nullish(),
    description: z.string().nullish(),
    metadata: z
      .object({
        blurHash: z.string().nullish(),
        lqip: z.string().nullish(),
      })
      .nullish(),
  }).nullish(),
  crop: z
    .object({
      bottom: z.number(),
      left: z.number(),
      right: z.number(),
      top: z.number(),
    })
    .optional(),
  hotspot: z.object({
    height: z.number(),
    width: z.number(),
    x: z.number(),
    y: z.number(),
  }).nullish(),
});
export const imagePropsZ = z.object({
  asset: z
    .object({
      _ref: z.string().nullish(),
      _id: z.string().nullish(),
      assetId: z.string().nullish(),
			altText: z.string().nullish(),
      metadata: z
        .object({
          lqip: z.string().nullish(),
          isOpaque: z.boolean().nullish(),
        })
        .nullish(),
    })
    .nullish(),
});

export const routeStubZ = z.object({
  _id: z.string(),
  title: z.string().nullish(),
  slug: z.string(),
  _type: z.string().nullish(),
	disallowRobots: z.boolean().nullish(),
	includeInSitemap: z.boolean().nullish(),
  seo: z
    .object({
      metaTitle: z.string().nullish(),
      metaDescription: z.string().nullish(),
      ogTitle: z.string().nullish(),
      ogDescription: z.string().nullish(),
      ogImage: z.any().nullish(),
    })
    .nullish(),
});

export const ctaZ = z.object({
	title: z.string(),
	route: routeStubZ.nullish(),
	link: z.string().url().nullish(),
})

export const categoryZ = z.object({
	title: z.string(),
	slug: z.string(),
	_id: z.string(),
	description: z.string().nullish(),
})

export const personZ = z.object({
	_id:z.string(),
	name: z.string(),
	photo: extendedImageZ.nullish(),
})

export type ExtendedImageType = z.infer<typeof extendedImageZ>;
