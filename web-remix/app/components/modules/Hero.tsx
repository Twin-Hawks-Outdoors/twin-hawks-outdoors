/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/prop-types */
import type { PortableTextComponents } from '@portabletext/react';
import { PortableText } from '@portabletext/react';

import { z } from 'zod';
import { ctaZ, imagePropsZ } from 'types/shared';

export const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-white max-w-md">{children}</p>,
  },
};

export const heroPropsZ = z.object({
	_type: z.literal("hero"),
	_key: z.string().nullish(),
	heading: z.string().nullish(),
	tagline: z.string().nullish(),
	backgroundImage: imagePropsZ.nullish(),
	ctas: z.array(ctaZ).nullish(),

})

export const Hero = ({ props }: { props: z.infer<typeof heroPropsZ> }) => (
  <section className="hero min-h-max grid lg:place-items-center">
		<h1>Hero</h1>
    {/* <GatsbyImage
      className="row-start-1 col-span-full filter brightness-50 md:aspect-video xl:aspect-[21/9]  w-full"
      // imgClassName=" w-full"
      loading="eager"
      objectFit="cover"
      objectPosition="center"
      image={props?.backgroundImage?.asset?.gatsbyImageData}
      alt={props?.backgroundImage?.asset?.altText || ''}
    />

    <StaticImage
      className="row-start-1 col-span-full filter brightness-50 md:aspect-video xl:aspect-[21/9] z-10 pointer-events-none"
      alt="grit"
      src="../../images/whitegrit.png"
      loading="eager"
      layout="fullWidth"
      placeholder="none"
    />
    <div className="text-white p-12 lg:container lg:p-0  row-start-1 col-span-full z-0 ">
      {props?.heading && <h1 className="mt-0">{props?.heading}</h1>}
      {props?._rawTagline && (
        <PortableText components={components} value={props?._rawTagline} />
      )}
      <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
        {props?.ctas &&
          props?.ctas.map((cta) => (
            <Link
              key={cta?._key}
              to={
                (cta?.route?.slug?.current as string) || (cta?.link as string)
              }
              className="button bg-red-500/90 hover:bg-red-400 focus:bg-red-400 even:bg-rust-600/90 even:hover:bg-rust-400 even:focus:bg-rust-400"
            >
              {cta?.title}
            </Link>
          ))}
      </div>
    </div> */}
  </section>
);

export default Hero;
