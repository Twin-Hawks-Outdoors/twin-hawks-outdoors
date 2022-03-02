export default {
  name: 'training',
  title: 'Training',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        // source: ({doc}) => `classes/${doc.title}`,
        maxLength: 200,
        isUnique: true
      }
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'block',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
}
