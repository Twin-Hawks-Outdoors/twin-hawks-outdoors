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
        gatsbyImageData(
          aspectRatio: 1.5
          formats: AUTO
          layout: FULL_WIDTH
          outputPixelDensities: 1.5
          placeholder: DOMINANT_COLOR
        )
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
`;
