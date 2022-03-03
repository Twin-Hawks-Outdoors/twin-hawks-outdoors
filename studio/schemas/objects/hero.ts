export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'simplePortableText',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'ctas',
      title: 'Call to actions',
      type: 'array',
      of: [{ type: 'cta', title: 'Call to action' }],
    },
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'backgroundImage',
    },
    prepare({ title,  media }) {
      return {
        title: title,
        subtitle: `Hero Section`,
        media,
      };
    },
  },
}
