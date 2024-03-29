import { PortableText } from '@portabletext/react';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import { BsQuestion } from 'react-icons/bs';
import { SinglePostQuery } from '../../graphql-types';
import Layout from '../components/Layout';
import { Seo } from '../components/Seo';
import { portableTextComponents } from '../lib/portableTextComponents';

function BlogPostSingle({ data, location }: PageProps<SinglePostQuery>) {
  const { sanityPost } = data;

  return (
    <>
      <Seo
        pathname={location?.pathname}
        title={sanityPost?.title || ''}
        description={sanityPost?.excerpt || ''}
        ogImage={sanityPost?.mainImage?.asset?.url || ''}
      />
      <Layout location={location}>
        <article>
          <header className="aspect-[21/9]   grid">
            <GatsbyImage
              className="md:aspect-[21/9] row-start-1 col-start-1 col-span-full filter transition-all sepia hover:sepia-0"
              image={
                sanityPost?.mainImage?.asset
                  ?.gatsbyImageData as IGatsbyImageData
              }
              alt={sanityPost?.mainImage?.asset?.altText || ''}
            />
            <h1 className=" m-0 w-max px-4 text-white rounded-sm container row-start-1 col-start-1 col-span-full z-10 text-center self-center place-self-center bg-opacity-30 bg-red-600 backdrop-blur-sm">
              {sanityPost?.title}
            </h1>
          </header>
          <section className="container  prose-p:max-w-prose prose-p:mx-auto">
            <div className=" my-16 flex items-center gap-4 max-w-prose mr-auto">
              {sanityPost?.author?.photo ? (
                <GatsbyImage
                  className="rounded-full"
                  image={
                    sanityPost?.author?.photo?.asset
                      ?.gatsbyImageData as IGatsbyImageData
                  }
                  alt={
                    sanityPost?.author?.photo?.alt ||
                    (sanityPost?.author?.photo?.asset?.altText as string)
                  }
                />
              ) : (
                <span className="block  bg-gradient-to-br from-cream-100 to-cream-50  rounded-full overflow-clip ">
                  <BsQuestion className="w-16 h-16" />
                </span>
              )}
              <div>
                <h6 className="m-0">{sanityPost?.author?.name}</h6>
                <small className="text-red-500">
                  Posted {sanityPost?._createdAt}
                </small>
              </div>
            </div>

            <PortableText value={sanityPost?._rawBody} components={portableTextComponents} />
          </section>
        </article>
      </Layout>
    </>
  );
}

export default BlogPostSingle;

export const query = graphql`
  query SinglePost($id: String) {
    sanityPost(id: { eq: $id }) {
      excerpt
      _createdAt(fromNow: true, locale: "US", difference: "")
      publishedAt(fromNow: true)
      _updatedAt(fromNow: true)
      author {
        name
        photo {
          alt
          asset {
            altText
            gatsbyImageData(height: 75, width: 75)
          }
        }
      }
      mainImage {
        asset {
          url
          altText
          gatsbyImageData(
            fit: FILL
            layout: FULL_WIDTH
            placeholder: DOMINANT_COLOR
          )
        }
      }
      title
      slug {
        current
      }
      _rawBody(resolveReferences: { maxDepth: 10 })
    }
  }
`;
