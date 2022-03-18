/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PortableText } from '@portabletext/react';
import { Link } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { SanityTextWithImageSection } from '../../../graphql-types';
import PrettyJson from '../PrettyJson';

const TextWithImageSection = ({
  props,
}: {
  props: SanityTextWithImageSection;
}) => {
  const orderClass = props?.imagePlacement === 'right' ? 1 : 2;
  console.log(orderClass);
  return (
    <section className="container mx-auto py-48 grid md:grid-cols-2 gap-8 relative">
      {props?.vintageBackground && (
        <StaticImage
          className=" -z-10 absolute w-[125%] h-[60%] top-24 -left-12 md:h-[90%] md:w-full md:-left-24 "
          src="../../images/vintage-bg-2.png"
          layout="fullWidth"
          // objectFit="cover"
          objectPosition="center"
          alt=""
        />
      )}
      <div className={`col-start-${orderClass} row-start-1 `}>
        <div className=" self-center">
          <h2 className="col-span-full">{props?.heading || props?.label}</h2>
          <div className={`prose `}>
            <PortableText value={props?._rawText} />
          </div>
          {props?.cta && (
            <Link
              to={
                (props?.cta?.route?.slug?.current || props?.cta?.link) as string
              }
            >
              {props?.cta?.title}
            </Link>
          )}
        </div>
      </div>
      <GatsbyImage
        className={`aspect-square rounded-md shadow-md shadow-black/50 row-start-1  col-start-${
          props.imagePlacement === 'right' ? 2 : 1
        } md:self-center `}
        image={props?.image?.asset?.gatsbyImageData}
        alt={props?.image?.alt || props?.image?.asset?.altText || ''}
      />
    </section>
  );
};

export default TextWithImageSection;
