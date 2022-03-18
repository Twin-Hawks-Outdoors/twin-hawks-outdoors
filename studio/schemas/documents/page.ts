import { MdOutlineContentCopy } from "react-icons/md";
import { slugWithType } from "../../lib/slugWithType";

export default {
  name: "page",
  title: "Page",
  type: "document",
  icon: MdOutlineContentCopy,
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
    slugWithType(),
    {
      name: "content",
      title: "Page Content",
      type: "array",
      group: "content",
      of: [{ type: "hero" }, { type: "textWithImageSection" }, { type: "textSection" }, {type: 'gallerySection'}, {type: 'cardSection'}, {type: 'ctaSection', title: 'Call To Action Section'}, {type: 'uiComponentRef', title: 'UI Component'}],
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
