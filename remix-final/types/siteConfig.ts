
import { z } from "zod";
import { pageZ } from "./page";
import { extendedImageZ, figureZ, portableTextZ, routeStubZ } from "./shared";


export const socialLinkZ = z.object({
  _type: z.literal("socialLink"),
  platform: z.union([
    z.literal("facebook"),
    z.literal("twitter"),
    z.literal("linkedin"),
    z.literal("instagram"),
    z.literal("snapchat"),
    z.literal("youtube"),
  ]).nullish(),
  url: z.string().url(),
	_key: z.string()
});

export const siteConfigZ = z.object({
  _type: z.literal("siteConfig"),
  title: z.string(),
  url: z.string().url(),
  frontpage: pageZ,
  blogpage: pageZ,
    logo: z.object({
    _type: z.literal("figure"),
		caption: z.string().nullish(),
		alt: z.string().nullish(),
    asset: z
      .object({
        _ref: z.string().nullish(),
        _id: z.string().nullish(),
        assetId: z.string().nullish(),
        metadata: z
          .object({
            lqip: z.string().optional(),
          })
          .nullish(),
      })
      .nullish(),
  }),
  socialLinks: z.array(socialLinkZ).nullish(),
  mainNavigation: z.array(routeStubZ).nullish(),
  footerNavigation: z.array(routeStubZ).nullish(),
  footerText: portableTextZ.nullish()
});

export type SiteConfigDoc = z.infer<typeof siteConfigZ>;
