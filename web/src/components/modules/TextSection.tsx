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
  console.log(props);
  return (
    <div className="container mx-auto text-center">
      <h2>{props.heading}</h2>
      <div className="prose mx-auto">
        <PortableText value={props?._rawText} />
      </div>
    </div>
  );
}

export default TextSection;
