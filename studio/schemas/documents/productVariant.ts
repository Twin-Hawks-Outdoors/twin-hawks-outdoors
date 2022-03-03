export default {
  title: "Product variant",
  name: "productVariant",
  type: "object",
  fields: [
    {
      name: 'isAvailable',
      title:'Product currently available?',
      type: 'boolean',
      validation: Rule => Rule.required(),
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Weight in grams",
      name: "grams",
      type: "number",
    },
    {
      title: "Price",
      name: "price",
      type: "number",
      description: "Please enter the price in US cents."
    },
    {
      title: "SKU",
      name: "sku",
      type: "string",
    },
    {
      title: "Taxable",
      name: "taxable",
      type: "boolean",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};
