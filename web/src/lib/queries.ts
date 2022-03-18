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
  }

  fragment SanityGallerySection on SanityGallerySection {
    _key
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
`;
