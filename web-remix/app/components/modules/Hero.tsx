/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/prop-types */
import type { PortableTextComponents } from "@portabletext/react";
import { PortableText } from "@portabletext/react";

import { z } from "zod";
import { ctaZ, imagePropsZ, portableTextZ } from "types/shared";
import groq from "groq";
import { ImageQuery, MainImage } from "../MainImage";
import { CtaQuery } from "./CtaSection";
import { Link } from "@remix-run/react";

export const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-white max-w-md">{children}</p>,
  },
};

export const HeroSectionQuery = groq`
	_type == "hero" => {
		_type,
		_key,
		heading,
		tagline,
		backgroundImage {
			${ImageQuery}
		},
		ctas[]{
			${CtaQuery}
		}
	}
`;

export const heroPropsZ = z.object({
  _type: z.literal("hero"),
  _key: z.string(),
  heading: z.string().nullish(),
  tagline: portableTextZ.nullish(),
  backgroundImage: imagePropsZ.nullish(),
  ctas: z.array(ctaZ).nullish(),
});

export const Hero = ({
  backgroundImage,
  _type,
  _key,
  ctas,
  heading,
  tagline,
}: z.infer<typeof heroPropsZ>) => (
  <section className="hero min-h-max grid lg:place-items-center">
    {backgroundImage && (
      <MainImage
        image={backgroundImage}
        alt={backgroundImage?.asset?.altText || ""}
        mode="cover"
        width={1200}
        className="row-start-1 col-span-full filter brightness-50 md:aspect-video xl:aspect-[21/9] w-full h-full object-cover"
        loading="eager"
      />
    )}
    <img
      src="/images/whitegrit.png"
      alt=""
      className="row-start-1 col-span-full filter brightness-50 md:aspect-video xl:aspect-[21/9] z-10 pointer-events-none w-full"
      width={200}
    />
    <div className="text-white p-12 lg:container lg:p-0  row-start-1 col-span-full z-0 ">
      {heading && <h1 className="mt-0">{heading}</h1>}
      {tagline && <PortableText components={components} value={tagline} />}
      <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
        {ctas &&
          ctas.map((cta) => (
            <Link
              key={cta?.title}
              prefetch="intent"
              to={(cta?.route?.slug || cta?.link) ?? ""}
              className="button bg-red-500/90 hover:bg-red-400 focus:bg-red-400 even:bg-rust-600/90 even:hover:bg-rust-400 even:focus:bg-rust-400"
            >
              {cta?.title}
            </Link>
          ))}
      </div>
    </div>
    {/*
     */}
  </section>
);

export default Hero;
