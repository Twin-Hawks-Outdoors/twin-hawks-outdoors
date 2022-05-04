/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PortableText } from '@portabletext/react';
import { PageProps } from 'gatsby';
import React from 'react';
import { SanityTextSection } from '../../../graphql-types';

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
        <PortableText value={props?._rawText} />
      </div>
    </div>
  );
}

export default TextSection;
