import { GrBlog } from "react-icons/gr";
import { slugWithType } from "../../lib/slugWithType";

export default {
  name: "post",
  title: "Article",
  type: "document",
  icon: GrBlog,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    slugWithType('articles', 'title'),
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "person" },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      type: "text",
      name: "excerpt",
      title: "Post Excerpt",
      rows: 3,
      validation: (Rule) =>
        Rule.required()
          .max(200)
          .error("The excerpt must be less than 200 characters in length"),
      description:
        "Add a catchy excerpt. You can split onto up to 3 lines if desired.",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "image",
    },
    prepare({
      title,
      author,
      media,
    }: {
      title: string;
      author?: string;
      media?: React.ReactElement;
    }): {
      title: string;
      author?: string;
      subtitle: string;
      media: React.ReactElement;
    } {
      return { title, media, subtitle: author && `by ${author}` };
    },
  },
};
