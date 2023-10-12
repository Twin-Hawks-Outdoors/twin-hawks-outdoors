import { getImageDimensions } from "@sanity/asset-utils";
import type { QueryParams } from "@sanity/client";
import groq from "groq";
import { SanityImage } from "sanity-image";
import type { ExtendedImageType } from "types/shared";

export const ImageQuery = groq`
	asset->{
			_ref,
			_id,
			altText,
			assetId,
			metadata {
				lqip,
			}
		}
	`;
interface ImageProps {
  image: ExtendedImageType;
  width?: number;
  height?: number;
  mode?: "cover" | "contain";
  queryParams?: QueryParams;
  alt?: string;
  className?: string;
  sizes?: string;
	loading?: "lazy" | "eager";
}

const baseUrl = `https://cdn.sanity.io/images/rur2issm/development/`;

export const MainImage = ({
  image,
  width,
  height,
  mode = "cover",
  queryParams = { q: 60 },
  alt,
  className,
  sizes,
	loading="lazy",
}: ImageProps) => {
  const {
    hotspot,
    asset: { _id, altText, description, metadata },
    crop,
  } = image;

  const { width: defaultWidth, height: defaultHeight } =
    getImageDimensions(image);
  return (
    <SanityImage
      className={className}
      sizes={sizes}
      id={_id}
      baseUrl={baseUrl}
      width={(width ?? defaultWidth) || 400}
      height={(height ?? defaultHeight) || 300}
      mode={mode}
      queryParams={queryParams}
      alt={alt ? alt : altText ?? description ?? ""}
      hotspot={hotspot}
      crop={crop}
    />
  );
};
