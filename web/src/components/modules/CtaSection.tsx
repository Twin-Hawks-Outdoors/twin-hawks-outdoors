import { PortableText, PortableTextComponents } from '@portabletext/react';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { SanityCtaSection } from '../../../graphql-types';
import Button from '../Button';

export const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-white max-w-md m-0 text-center">{children}</p>
    ),
  },
};

function CtaSection({ props }: { props: SanityCtaSection }) {
  return (
    <section className="grid place-items-center ">
      <StaticImage
        className="filter sepia brightness-[.25] row-start-1 col-span-full col-start-1 md:aspect-[21/9] max-h-full lg:aspect-[30/9]"
        src="../../images/foggy-mountain.jpg"
        quality={65}
        alt="foggy mountain with trees"
        objectPosition="center bottom"
        objectFit="cover"
      />
      <div className="row-start-1 col-start-1 z-10 flex flex-wrap items-center justify-center  gap-8">
        <div className="max-w-prose">
          <PortableText
            components={components}
            key={props?._key}
            value={props?._rawBody}
          />
        </div>
        <Button
          to={(props?.cta?.route?.slug?.current || props?.cta?.link) as string}
          className="mt-0"
          bgColor="red"
        >
          {props?.cta?.title}
        </Button>
      </div>
    </section>
  );
}

export default CtaSection;
