import { ImageUrlBuilderOptionsWithAsset } from '@sanity/image-url/lib/types/types';
import React from 'react';
import { urlFor } from './sanityClient';

export const portableTextComponents = {
  types: {
    image: ({ value }: { value: ImageUrlBuilderOptionsWithAsset }) => (
      <figure className="flex justify-center">
        <img src={urlFor(value?.asset).width(800).url()} alt="" />
      </figure>
    ),
  },
};
