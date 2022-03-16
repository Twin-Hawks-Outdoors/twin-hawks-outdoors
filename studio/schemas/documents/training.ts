import { GiCampfire } from "react-icons/gi";
import { slugWithType } from "../../lib/slugWithType";

export default {
  name: "training",
  title: "Training Classes",
  type: "document",
  icon: GiCampfire,
  groups: [
    { name: "seo", title: "SEO" },
    { name: "content", title: "Content", default: true },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      group: ["seo", "content"],
    },
    slugWithType('training', 'title'),
    {
      name: "content",
      title: "Page Content",
      type: "array",
      group: "content",
      of: [
        { type: "hero" },
        { type: "textWithImageSection" },
        { type: "textSection" },
        { type: "imageGallery" },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "this description populates the meta-tags on the webpage",
      group: "seo",
    },
    {
      name: "openGraphImage",
      title: "Open Graph Image",
      type: "image",
      description: "Image for sharing previews on Facebook, Twitter, etc.",
      group: "seo",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "openGraphImage",
    },
  },
};
