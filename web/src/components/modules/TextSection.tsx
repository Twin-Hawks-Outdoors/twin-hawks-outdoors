/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PortableText } from '@portabletext/react';
import { PageProps } from 'gatsby';
import React from 'react';
import { SanityTextSection } from '../../../graphql-types';
import { portableTextComponents } from '../../lib/portableTextComponents';

function TextSection({
  props,
}: {
  props: SanityTextSection & { location: PageProps['location'] };
}) {
  const { location } = props;

  return (
    <div
      className={`container py-24 mx-auto ${
        location.pathname.includes('contact') ? 'text-center' : ''
      } first:py-12`}
    >
      {props?.heading && <h2>{props.heading}</h2>}
      <div className="mx-auto">
        <PortableText value={props?._rawText} components={portableTextComponents} />
      </div>
    </div>
  );
}

export default TextSection;
