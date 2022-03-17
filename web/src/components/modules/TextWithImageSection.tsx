/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PortableText } from '@portabletext/react';
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

  return (
    <section className="container py-48 grid md:grid-cols-2 gap-8 relative">
      {props?.vintageBackground && (
        <StaticImage
          className=" -z-10 absolute w-full  "
          src="../../images/vintage-bg-2.png"
          layout="fullWidth"
          objectFit="contain"
          objectPosition="center"
          alt=""
        />
      )}
      <div className={`order-${orderClass} flex col-start-1 row-start-1`}>
        <div className=" self-center">
          <h2 className="col-span-full">{props?.heading || props?.label}</h2>
          <div
            className={`prose ${
              props?.vintageBackground ? 'font-bold ' : 'font-normal'
            }`}
          >
            <PortableText value={props?._rawText} />
          </div>
        </div>
      </div>
      <GatsbyImage
        className={`aspect-square rounded-md shadow-md shadow-black/50 order-${
          props.imagePlacement === 'right' ? 2 : 1
        } `}
        image={props?.image?.asset?.gatsbyImageData}
        alt={props?.image?.alt || props?.image?.asset?.altText || ''}
      />
    </section>
  );
};

export default TextWithImageSection;
