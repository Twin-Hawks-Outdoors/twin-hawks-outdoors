import groq from "groq";
import { imagePropsZ } from "types/shared";
import { z } from "zod";
import { ImageQuery, MainImage } from "../MainImage";
import PrettyJson from "../PrettyJson";

export const imageGalleryZ = z.object({
	gallery: z.array(imagePropsZ),
	_type: z.literal("imageGallery"),
	_key: z.string(),
})

export const ImageGalleryQuery = groq`
	_type == "imageGallery" => {
		_type,
		_key,
		gallery[]{
			${ImageQuery}
		},
	}
`
export function ImageGallery({_key,_type,gallery}: z.infer<typeof imageGalleryZ>) {
  return (
    <div className=" only:md:py-24 flex gap-4 justify-between  flex-wrap md:grid md:grid-cols-3 ">
			{gallery?.map((image) => (
				<MainImage mode="contain" className="w-full rounded-md aspect-square object-cover shadow-[rgba(0,0,0,0.3)] shadow-lg overflow-hidden" alt={image.asset?.altText ??""} image={image} width={800} height={800} key={image.asset?._id}/>
			))}
    </div>
  );
}

export default ImageGallery;
