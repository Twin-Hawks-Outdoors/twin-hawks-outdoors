/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PortableText } from "@portabletext/react";

import { z } from "zod";
import { ctaZ, extendedImageZ, portableTextZ } from "types/shared";
import groq from "groq";
import { ImageQuery, MainImage } from "../MainImage";
import { CtaQuery } from "./CtaSection";
import { portableTextComponents } from "~/lib/portableTextComponents";
import Button from "../Button";
import { cn } from "~/lib/misc";

export const textWithImagePropsZ = z.object({
  _type: z.literal("textWithImageSection"),
  heading: z.string().nullish(),
  label: z.string().nullish(),
  imagePlacement: z.enum(["left", "right"]).default("left"),
  vintageBackground: z.boolean().default(false),
  image: extendedImageZ.nullish(),
  cta: ctaZ.nullish(),
	_key:z.string().nullish(),
  text: portableTextZ.nullish(),
});

export const TextWithImageQuery = groq`
	_type == "textWithImageSection" => {
		_key,
		_type,
		heading,
		label,
		imagePlacement,
		text,
		vintageBackground,
		image {
			${ImageQuery}
		},
		cta {
			${CtaQuery}
		}

	}
`;

export const TextWithImageSection = ({
  _type,
  imagePlacement,
  vintageBackground,
  heading,
  label,
  image,
  cta,
  text,
}: z.infer<typeof textWithImagePropsZ>) => {
  // const orderClass =
  //   props?.imagePlacement === 'right' ? 'md:col-start-1' : 'md:col-start-2';
  let bgColor;
  if (cta?.route?.slug?.includes("/training/")) {
    bgColor = "red";
  } else if (cta?.route?.slug?.includes("/shop/")) {
    bgColor = "rust";
  } else {
    bgColor = "teal";
  }

  return (
    <section className="container mx-auto py-24 md:py-48 md:grid grid-cols-1 md:grid-cols-2 gap-8 relative ">
      {vintageBackground && (
        <div className="hidden md:block row-start-1 col-start-1 col-span-full relative  md:h-[140%] md:top-[-180px] lg:h-[125%] md:w-full md:-left-24 w-[125%] h-[60%] ">
          <img
            src="/images/vintage-bg-2.png"
            width={400}
            className="-z-10 absolute top-24 -left-12 md:h-[90%] md:w-full md:-left-24 w-[125%] h-[60%] brightness-125 object-contain object-center"
            alt="vintage background"
          />
        </div>
      )}
      <MainImage
        image={image}
        alt={image?.alt || image?.asset?.altText || ""}
        className={cn(`aspect-square w-full rounded-md shadow-md shadow-black/50 row-start-1 self-center`,imagePlacement === "right" ? "md:col-start-2" : "md:col-start-1")}
        width={800}
				height={800}
        loading="lazy"
        mode="cover"
      />

      <div
        className={cn(
          `row-start-1 self-center`,
          imagePlacement === "right" ? "md:col-start-1" : "md:col-start-2"
        )}
      >
        <div className=" self-center">
          <h2
            className={`col-span-full ${
              vintageBackground ? "lg:mt-0" : "md:mt-0"
            }`}
          >
            {heading || label}
          </h2>
          <div className={`prose `}>
            <PortableText value={text} components={portableTextComponents} />
          </div>
          {cta && (
            <Button
              to={(cta?.route?.slug || cta?.link) ?? ""}
              bgColor={bgColor}
            >
              {cta?.title}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default TextWithImageSection;
