import slugify from "slugify";

function formatSlug(input, slugStart) {
  const slug = slugify(input, { lower: true });
  return slugStart + slug + '/';
}

export function slugWithType(prefix = ``, source = `title`) {
  const slugStart = prefix ? `/${prefix}/` : "/";

  return {
    name: `slug`,
    type: `slug`,
    options: {
      source,
      slugify: (value) => formatSlug(value, slugStart),
      // isUnique: isUniqueAcrossAllDocuments,
    },
    validation: (Rule) =>
      Rule.required().custom(({current}) => {

        if (typeof current === "undefined") {
          return true;
        }

        if (current) {
          if (!current.startsWith(slugStart)) {
            return `Slug must begin with "${slugStart}". Click "Generate" to reset.`;
          }
          if (!current.endsWith('/')) {
            return `Slug must end with "/". Click "Generate" to reset.`;
          }



        }

        return true;
      }),
  };
}
