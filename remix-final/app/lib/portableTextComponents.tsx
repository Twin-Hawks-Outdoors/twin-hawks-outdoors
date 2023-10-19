import type { ImageUrlBuilderOptionsWithAsset } from "@sanity/image-url/lib/types/types";
import { urlFor } from "./misc";

export const portableTextComponents = {
  types: {
    image: ({ value }: { value: ImageUrlBuilderOptionsWithAsset }) => (
      <figure className="flex justify-center">
        <img src={urlFor(value?.asset).width(800).url()} alt="" />
      </figure>
    ),
  },
};
