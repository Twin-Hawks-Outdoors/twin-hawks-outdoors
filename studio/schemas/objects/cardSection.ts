export default {
  name: "cardSection",
  title: "Card Section",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "simplePortableText",
    },
    {
      name: "cards",
      title: "Cards",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "product" },
            { type: "training" },
            { type: "popup" },
            { type: "post" },
          ],
        },
      ],
    },

    {
      name: "ctas",
      title: "Call to actions",
      type: "array",
      of: [{ type: "cta", title: "Call to action" }],
    },
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title, media }) {
      return {
        title: title,
        subtitle: `Card Section`,
      };
    },
  },
};
