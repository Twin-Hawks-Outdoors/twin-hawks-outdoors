export default {
  name: 'imageGallery',
  title: 'Image Gallery',
  type: 'object',
  fields: [
    {
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid'
      }
    },
  ],
}
