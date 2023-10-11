/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PortableText } from '@portabletext/react';

import Button from '../Button';
import { portableTextComponents } from '../../lib/portableTextComponents';
import { z } from 'zod';
import { ctaZ, extendedImageZ } from 'types/shared';

export const textWithImagePropsZ = z.object({
	_type: z.literal("textWithImageSection"),
	heading: z.string().nullish(),
	label: z.string().nullish(),
	imagePlacement: z.enum(["left", "right"]).default("left"),
	vintageBackground: z.boolean().default(false),
	image: extendedImageZ.nullish(),
	cta: ctaZ.nullish(),
})

export const TextWithImageSection = ({
  props,
}: {
  props: z.infer<typeof textWithImagePropsZ>;
}) => {
  const orderClass =
    props?.imagePlacement === 'right' ? 'md:col-start-1' : 'md:col-start-2';
  let bgColor;
  if (props?.cta?.route?.slug?.current?.includes('/training/')) {
    bgColor = 'red';
  } else if (props?.cta?.route?.slug?.current?.includes('/shop/')) {
    bgColor = 'rust';
  } else {
    bgColor = 'teal';
  }

  return (
    <section className="container mx-auto py-24 md:py-48 md:grid grid-cols-1 md:grid-cols-2 gap-8 relative ">
      {/* {props?.vintageBackground && (
        <div className="hidden md:block row-start-1 col-start-1 col-span-full relative  md:h-[140%] md:top-[-180px] lg:h-[125%] md:w-full md:-left-24 w-[125%] h-[60%] ">
          <StaticImage
            className="-z-10 absolute top-24 -left-12 md:h-[90%] md:w-full md:-left-24 w-[125%] h-[60%] brightness-125 "
            src="../../images/vintage-bg-2.png"
            layout="fullWidth"
            // objectFit="cover"
            objectPosition="center"
            alt=""
          />
        </div>
      )}
      <GatsbyImage
        className={`aspect-square rounded-md shadow-md shadow-black/50 row-start-1 self-center ${
          props.imagePlacement === 'right' ? 'md:col-start-2' : 'md:col-start-1'
        } md:self-center `}
        image={props?.image?.asset?.gatsbyImageData}
        alt={props?.image?.alt || props?.image?.asset?.altText || ''}
      />
      <div className={`${orderClass} row-start-1 self-center`}>
        <div className=" self-center">
          <h2
            className={`col-span-full ${
              props?.vintageBackground ? 'lg:mt-0' : 'md:mt-0'
            }`}
          >
            {props?.heading || props?.label}
          </h2>
          <div className={`prose `}>
            <PortableText value={props?._rawText} components={portableTextComponents}/>
          </div>
          {props?.cta && (
            <Button
              to={
                (props?.cta?.route?.slug?.current || props?.cta?.link) as string
              }
              bgColor={bgColor}
            >
              {props?.cta?.title}
            </Button>
          )}
        </div>
      </div> */}
    </section>
  );
};

export default TextWithImageSection;
