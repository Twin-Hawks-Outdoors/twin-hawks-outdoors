
export default {
  name: 'ctaSection',
  title: 'CTA Section',
  type: 'object',
  fields: [
    {
      name: 'body',
      title: 'Body',
      type: 'portableText',
    },
    {
      name: 'cta',
      title: 'Cta',
      type: 'cta',
    },
  ],
  preview: {
    select: {
      title: 'body',
      subtitle: 'cta.title',
      route: 'cta.route.slug.current',
    },
    prepare({ title, subtitle, sectionBg, route }) {
      return {
        title: subtitle,
        subtitle: `CTA Section - /${route}`,
      };
    },
  },
}
