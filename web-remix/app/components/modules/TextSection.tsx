/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "../../lib/portableTextComponents";
import { z } from "zod";
import { portableTextZ } from "types/shared";
import groq from "groq";
export const textSectionZ = z.object({
  _type: z.literal("textSection"),
  _key: z.string(),
  label: z.string().nullish(),
  heading: z.string().nullish(),
  text: portableTextZ.nullish(),
});

export const TextSectionQuery = groq`
	_type == "textSection" => {
		_key,
		_type,
		label,
		heading,
		tetx
	}`
export function TextSection({
  _key,
  heading,
  label,
  text,
}: z.infer<typeof textSectionZ>) {
  return (
    <div
      className={`container py-24 mx-auto ${
        location.pathname.includes("contact") ? "text-center" : ""
      } first:py-12`}
    >
      {heading && <h2>{heading}</h2>}
      <div className="mx-auto">
        <PortableText value={text} components={portableTextComponents} />
      </div>
    </div>
  );
}

export default TextSection;
