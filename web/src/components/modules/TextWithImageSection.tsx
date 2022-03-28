/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PortableText } from '@portabletext/react';
import { Link } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { SanityTextWithImageSection } from '../../../graphql-types';
import Button from '../Button';
import PrettyJson from '../PrettyJson';

const TextWithImageSection = ({
  props,
}: {
  props: SanityTextWithImageSection;
}) => {
  const orderClass =
    props?.imagePlacement === 'right' ? 'md:col-start-1' : 'md:col-start-2';
  console.log(props);
  return (
    <section className="container mx-auto py-24 md:py-48 md:grid grid-cols-1 md:grid-cols-2 gap-8 relative ">
      {props?.vintageBackground && (
        <StaticImage
          className="hidden md:block -z-10 absolute w-[125%] h-[60%] top-24 -left-12 md:h-[90%] md:w-full md:-left-24 "
          src="../../images/vintage-bg-2.png"
          layout="fullWidth"
          // objectFit="cover"
          objectPosition="center"
          alt=""
        />
      )}
      <GatsbyImage
        className={`aspect-square rounded-md shadow-md shadow-black/50 row-start-1 self-center ${
          props.imagePlacement === 'right' ? 'md:col-start-2' : 'md:col-start-1'
        } md:self-center `}
        image={props?.image?.asset?.gatsbyImageData}
        alt={props?.image?.alt || props?.image?.asset?.altText || ''}
      />
      <div className={`${orderClass} row-start-1 self-center`}>
        {/* <PrettyJson data={props} /> */}
        <div className=" self-center">
          <h2 className="col-span-full md:mt-0">
            {props?.heading || props?.label}
          </h2>
          <div className={`prose `}>
            <PortableText value={props?._rawText} />
          </div>
          {props?.cta && (
            <Button
              to={
                (props?.cta?.route?.slug?.current || props?.cta?.link) as string
              }
            >
              {props?.cta?.title}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default TextWithImageSection;
