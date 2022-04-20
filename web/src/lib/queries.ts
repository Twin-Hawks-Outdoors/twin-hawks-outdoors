import { graphql } from 'gatsby';

export const fragments = graphql`
  fragment SanityHero on SanityHero {
    _key
    __typename
    _type
    heading
    _rawTagline(resolveReferences: { maxDepth: 10 })
    backgroundImage {
      asset {
        altText
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
    ctas {
      _type
      _key
      link
      title
      ...CtaRouteFragment
    }
  }

  fragment SanityCardSection on SanityCardSection {
    _key
    _type
    cards {
      __typename
      ...SanityTraining
      ...SanityPopup
      ...SanityPost
      ...SanityProduct
    }
    heading
  }

  fragment SanityUiComponentRef on SanityUiComponentRef {
    _key
    name
  }

  fragment SanityGallerySection on SanityGallerySection {
    _key
  }

  fragment SanityCtaSection on SanityCtaSection {
    _key
    cta {
      title
      link
      ...CtaRouteFragment
    }
    _rawBody(resolveReferences: { maxDepth: 10 })
  }
  fragment SanityTextWithImageSection on SanityTextWithImageSection {
    _key
    _type
    heading
    vintageBackground
    imagePlacement
    label
    image {
      alt
      asset {
        gatsbyImageData(
          outputPixelDensities: 1.5
          layout: FULL_WIDTH
          formats: AUTO
          placeholder: BLURRED
        )
      }
    }
    _rawText(resolveReferences: { maxDepth: 10 })
    cta {
      title
      ...CtaRouteFragment
      link
    }
  }
  fragment SanityTextSection on SanityTextSection {
    _key
    _type
    heading
    label
    _rawText(resolveReferences: { maxDepth: 10 })
  }

  fragment CtaRouteFragment on SanityCta {
    route {
      ... on SanityPost {
        id
        slug {
          current
        }
      }
      ... on SanityPage {
        id
        slug {
          current
        }
      }
      ... on SanityProduct {
        id
        slug {
          current
        }
      }
      ... on SanityRoute {
        id
        slug {
          current
        }
      }
      ... on SanityTraining {
        id
        slug {
          current
        }
      }
    }
  }

  fragment SanityTraining on SanityTraining {
    _id
    _key
    slug {
      current
    }
    title
    description
  }

  fragment SanityPopup on SanityPopup {
    _id
    _key
    streetAddress
    city
    state
    zipcode
    name
    openingHours {
      from
      to
    }
  }

  fragment SanityPost on SanityPost {
    id
    title
    publishedAt
    _createdAt(fromNow: true, locale: "en-US")
    excerpt
    slug {
      current
    }
  }

  fragment SanityProduct on SanityProduct {
    id
    title
    slug {
      current
    }
    mainImage {
      asset {
        gatsbyImageData(
          aspectRatio: 1
          formats: AUTO
          fit: CROP
          height: 300
          width: 300
        )
      }
    }
    tags
    blurb
  }

  fragment SanityImageGallery on SanityImageGallery {
    _type
    gallery {
      _type
      __typename
      asset {
        _id
        title
        altText
        gatsbyImageData(layout: FULL_WIDTH, width: 800, height: 800)
      }
    }
  }
`;
