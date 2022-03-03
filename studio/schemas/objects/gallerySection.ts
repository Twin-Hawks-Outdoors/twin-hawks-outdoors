export default {
  name: "gallerySection",
  title: "Gallery Section",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "imageGallery",
      title: "Image gallery",
      type: "imageGallery",
    },
  ],
  preview: {
    select: {
      heading: "heading",
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
        subtitle: "Image Gallery",
      };
    },
  },
};
