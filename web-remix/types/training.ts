
import { z } from "zod";
import { imagePropsZ } from "./shared";
import { heroPropsZ } from "~/components/modules/Hero";
import { textWithImagePropsZ } from "~/components/modules/TextWithImageSection";
import { textSectionZ } from "~/components/modules/TextSection";
import { imageGalleryZ } from "~/components/modules/ImageGallery";

export const trainingZ = z.object({
	_id: z.string(),
	title: z.string(),
	_type: z.literal("training"),
	slug: z.string(),
	description: z.string(),
	openGraphImage: imagePropsZ.nullish(),
	content: z.array(z.discriminatedUnion("_type", [heroPropsZ, textWithImagePropsZ,textSectionZ, imageGalleryZ]))
})

export const trainingExcerptZ = trainingZ.omit({
	content: true,
})
