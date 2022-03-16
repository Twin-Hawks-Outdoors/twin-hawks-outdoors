export default {
  type: "object",
  name: "textWithImageSection",
  title: "Image with text",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "label",
      type: "string",
      title: "Label",
    },
    {
      name: "text",
      type: "simplePortableText",
      title: "Text",
    },
    {
      name: 'imagePlacement',
      title: 'Image Placement',
      type: 'string',
      initialValue: 'left',
      options: {
        list: ["left", "right"],
        layout: 'radio',
        direction: 'horizontal'
      }
    },
    {
      name: 'vintageBackground',
      title: 'Vintage Text Background?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: "image",
      type: "figure",
      title: "Image",
      options: { hotspot: true },
    },
    {
      name: "cta",
      type: "cta",
      title: "Call to action",
    },
  ],
  preview: {
    select: {
      heading: "heading",
      subtitle: "label",
      media: "image",
    },
    prepare({ heading, media }) {
      return {
        title: `Image: ${heading}`,
        subtitle: "Image section",
        media,
      };
    },
  },
};
