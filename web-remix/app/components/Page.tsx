import React, { Suspense } from "react";
import { ImageQuery } from "./MainImage";
import groq from "groq";
import { CardSectionQuery } from "~/components/modules/CardSection";
import type { PageDocument } from "types/page";
import { UiComponentQuery, UIComponent } from "./modules/UiComponentRef";
import { CtaSectionQuery } from "./modules/CtaSection";

export const PageQuery = groq`
	_id,
	_type,
	_key,
	title,
	"slug": slug.current,
	openGraphImage {
		${ImageQuery}
	},
	content[]{
		_type,
		${CardSectionQuery},
		${UiComponentQuery},
		${CtaSectionQuery},
	}
`;

const lookup = {
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

  // columns: React.lazy(async () => {
  //   const { ColumnsSection: Component } = await import(
  //     "~/components/modules/Columns"
  //   );
  //   return {
  //     default: Component,
  //   };
  // }),
  ctaSection: React.lazy(async () => {
    const { CtaSection: Component } = await import(
      "~/components/modules/CtaSection"
    );
    return {
      default: Component,
    };
  }),
  // richText: React.lazy(async () => {
  //   const { RichText: Component } = await import(
  //     "~/components/modules/RichText"
  //   );
  //   return {
  //     default: Component,
  //   };
  // }),
  textWithImageSection: React.lazy(async () => {
    const { TextWithImageSection: Component } = await import(
      "~/components/modules/TextWithImageSection"
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
    console.log(module._type);
    const Component = lookup[module._type];

    if (hasKey(module)) {
      return <Component key={module._key} {...module} />;
    }

    return null;
  });
  return <Suspense fallback={<div>Loading...</div>}>{modules}</Suspense>;
};
