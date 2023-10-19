import React, { Suspense } from "react";
import { ImageQuery } from "./MainImage";
import groq from "groq";
import { CardSectionQuery } from "~/components/modules/CardSection";
import type { PageDocument } from "types/page";
import { UiComponentQuery, UIComponent } from "./modules/UiComponentRef";
import { CtaSectionQuery } from "./modules/CtaSection";
import { HeroSectionQuery } from "~/components/modules/Hero";
import  { TextWithImageQuery } from "~/components/modules/TextWithImageSection";
import { TextSectionQuery } from "./modules/TextSection";
import { ImageGalleryQuery } from "~/components/modules/ImageGallery";

export const PageQuery = groq`
	_id,
	_type,
	_key,
	title,
	description,
	"slug": slug.current,
	openGraphImage {
		${ImageQuery}
	},
	content[]{
		_key,
		_type,
		${HeroSectionQuery},
		${CardSectionQuery},
		${UiComponentQuery},
		${CtaSectionQuery},
		${TextWithImageQuery},
		${TextSectionQuery},
		${ImageGalleryQuery}
	}
`;

export const moduleLookup = {
  hero: React.lazy(async () => {
    const { Hero: Component } = await import("~/components/modules/Hero");
    return {
      default: Component,
    };
  }),
  cardSection: React.lazy(async () => {
    const { CardSection: Component } = await import(
      "~/components/modules/CardSection"
    );
    return {
      default: Component,
    };
  }),

  ctaSection: React.lazy(async () => {
    const { CtaSection: Component } = await import(
      "~/components/modules/CtaSection"
    );
    return {
      default: Component,
    };
  }),
  textSection: React.lazy(async () => {
    const { TextSection: Component } = await import(
      "~/components/modules/TextSection"
    );
    return {
      default: Component,
    };
  }),
  textWithImageSection: React.lazy(async () => {
    const { TextWithImageSection: Component } = await import(
      "~/components/modules/TextWithImageSection"
    );
    return {
      default: Component,
    };
  }),
  imageGallery: React.lazy(async () => {
    const { ImageGallery: Component } = await import(
      "~/components/modules/ImageGallery"
    );
    return {
      default: Component,
    };
  }),
  uiComponentRef: UIComponent,
} as const;

// type guard function to check for _key
function hasKey(module: unknown): module is PageDocument["content"][0] {
  return (
    Boolean(module) &&
    typeof module === "object" &&
    typeof (module as PageDocument["content"][0])._type === "string" &&
    typeof (module as PageDocument["content"][0])._key === "string"
  );
}

export const Page = ({ content }: { content: PageDocument["content"] }) => {
  const modules = content.map((module, idx) => {
    const Component = moduleLookup[module._type];

    if (hasKey(module)) {
      return <Component key={module._key} {...module} />;
    }

    return null;
  });
  return <Suspense fallback={<div>Loading...</div>}>{modules}</Suspense>;
};
