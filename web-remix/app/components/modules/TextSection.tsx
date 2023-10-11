/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PortableText } from '@portabletext/react';
import { PageProps } from 'gatsby';
import React from 'react';
import { SanityTextSection } from '../../../graphql-types';
import { portableTextComponents } from '../../lib/portableTextComponents';
import { z } from 'zod';
import { portableTextZ } from 'types/shared';
export const textSectionZ = z.object({
	_type: z.literal("textSection"),
	_key: z.string(),
	label: z.string().nullish(),
	heading: z.string().nullish(),
	text: portableTextZ.nullish()
})
function TextSection({
  props,
}: {
  props: z.infer<typeof textSectionZ>;
}) {

  return (
    <div
      className={`container py-24 mx-auto ${
        location.pathname.includes('contact') ? 'text-center' : ''
      } first:py-12`}
    >
      {props?.heading && <h2>{props.heading}</h2>}
      <div className="mx-auto">
        {/* <PortableText value={props?._rawText} components={portableTextComponents} /> */}
      </div>
    </div>
  );
}

export default TextSection;
