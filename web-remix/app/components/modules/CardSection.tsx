/* eslint-disable @typescript-eslint/no-unsafe-return */

import groq from "groq";
import React, { Suspense } from "react";
import { popupZ } from "types/popup";
import { postExcerptZ } from "types/post";
import { productExcerptZ } from "types/product";
import { ctaZ } from "types/shared";
import { trainingExcerptZ } from "types/training";
import { z } from "zod";

export const cardSectionZ = z.object({
  _type: z.literal("cardSection"),
  _key: z.string().nullish(),
  heading: z.string().nullish(),
  tagline: z.string().nullish(),
  cards: z.array(
    z.discriminatedUnion("_type", [
      productExcerptZ,
      postExcerptZ,
      trainingExcerptZ,
      popupZ,
    ])
  ),
  ctas: z.array(ctaZ).nullish(),
});

export const CardSectionQuery = groq`
	_type =="cardSection" => {
		_type,
		_key,
		heading,
		tagline,
		cards[]->{
			_type
		},
		ctas[]{
			...
		}
	}
`;

const excerptLookup = {
  postExcerpt: React.lazy(async () => {
    const { PostExcerpt: Component } = await import("./PostExcerpt");
    return {
      default: Component,
    };
  }),
  trainingExcerpt: React.lazy(async () => {
    const { TrainingExcerpt: Component } = await import("./TrainingExcerpt");

    return {
      default: Component,
    };
  }),
  popup: React.lazy(async () => {
    const { PopupExcerpt: Component } = await import("./PopupExcerpt");

    return {
      default: Component,
    };
  }),
} as const;

export const CardSection = ({
  cards,
  heading,
}: z.infer<typeof cardSectionZ>) => {
  const cardModules = cards?.map((card) => {

    const ExcerptComponent = excerptLookup[card?._type as keyof typeof excerptLookup ]

    return <ExcerptComponent {...card} key={card?._id} />;
  });

  return (
    <section className="container py-12 md:py-24 grid md:grid-cols-2 gap-16">
      <h2 className="m-0 col-span-full">{heading}</h2>
      <Suspense fallback="Loading data...">{cardModules}</Suspense>
    </section>
  );
};

export default CardSection;
