import { imagePropsZ } from "types/shared";
import { z } from "zod";

export const imageGalleryZ = z.object({
	gallery: z.array(imagePropsZ).nullish(),
	_type: z.literal("imageGallery"),

})
function ImageGallery({ props }: { props: z.infer<typeof imageGalleryZ> }) {
  return (
    <div className=" only:md:py-24 flex gap-4 justify-between  flex-wrap md:grid md:grid-cols-3 ">
      {/* {props?.gallery?.map((image) => (
        // <GatsbyImage
        //   className="w-full rounded-md shadow-[rgba(0,0,0,0.3)] shadow-lg overflow-hidden"
        //   image={image?.asset?.gatsbyImageData as IGatsbyImageData}
        //   key={image?.asset?._id}
        //   alt={image?.asset?.altText || ''}
        // />
      ))} */}
    </div>
  );
}

export default ImageGallery;
