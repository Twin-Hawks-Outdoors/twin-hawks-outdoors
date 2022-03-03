export default {
  name: "page",
  title: "Page",
  type: "document",
  groups: [
    { name: "seo", title: "SEO" },
    { name: "content", title: "Content" },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      group: ["seo", "content"],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "seo",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
      },
    },
    {
      name: "content",
      title: "Page Content",
      type: "array",
      group: "content",
      of: [{ type: "hero" }, { type: "imageSection" }, { type: "textSection" }],
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
