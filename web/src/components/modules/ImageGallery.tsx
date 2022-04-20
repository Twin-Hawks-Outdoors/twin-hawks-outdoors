import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import { SanityImageAsset, SanityImageGallery } from '../../../graphql-types';
import PrettyJson from '../PrettyJson';

function ImageGallery({ props }: { props: SanityImageGallery }) {
  return (
    <div className="md:py-24 flex gap-4 justify-between  flex-wrap md:grid md:grid-cols-2 ">
      {props?.gallery?.map((image) => (
        <GatsbyImage
          className="w-full rounded-md shadow-[rgba(0,0,0,0.3)] shadow-lg overflow-clip"
          image={image?.asset?.gatsbyImageData as IGatsbyImageData}
          key={image?.asset?._id}
          alt={image?.asset?.altText || ''}
        />
      ))}
    </div>
  );
}

export default ImageGallery;
