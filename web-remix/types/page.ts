import { z } from "zod";
import { cardSectionZ } from "~/components/modules/CardSection";
import { ctaSectionZ } from "~/components/modules/CtaSection";
import { heroPropsZ } from "~/components/modules/Hero";
import { imageGalleryZ } from "~/components/modules/ImageGallery";
import { textSectionZ } from "~/components/modules/TextSection";
import { textWithImagePropsZ } from "~/components/modules/TextWithImageSection";
import { uiComponentRefZ } from "~/components/modules/UiComponentRef";

export const pageZ = z.object({
	_id: z.string(),
	_type: z.literal("page"),
	title: z.string(),
	slug: z.string(),
	content: z.array(z.discriminatedUnion("_type", [cardSectionZ, heroPropsZ, imageGalleryZ, textWithImagePropsZ, textSectionZ, ctaSectionZ, uiComponentRefZ]))
})

export type PageDocument = z.infer<typeof pageZ>;
