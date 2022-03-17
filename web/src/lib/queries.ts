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
      route {
        slug {
          current
        }
        page {
          title
        }
      }
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
      route {
        page {
          slug {
            current
          }
        }
      }
      link
    }
  }
  fragment SanityTextSection on SanityTextSection {
    _key
  }
`;
