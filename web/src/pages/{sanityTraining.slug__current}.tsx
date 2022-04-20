/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { graphql } from 'gatsby';
import type { PageProps, StaticQueryDocument } from 'gatsby';
import React from 'react';
import { SanityTrainingQueryQuery } from '../../graphql-types';
import Layout from '../components/Layout';
import PrettyJson from '../components/PrettyJson';
import Button from '../components/Button';

const SanityPage = ({
  data,
  location,
  pageContext,
}: PageProps<SanityTrainingQueryQuery, { id: string }>) => {
  const modules = data?.sanityTraining?.content?.map((element, idx) => {
    const typename = element?.__typename.replace('Sanity', '');

    const Component = React.lazy(
      () => import(`../components/modules/${typename as string}`)
    );

    return (
      <Component
        props={{ ...element, location }}
        key={(element?._key as string) || idx}
      />
    );
  });

  const heroModule = modules && modules?.[0];
  const otherModules = modules && modules?.slice(1, modules.length);

  return (
    <React.Suspense fallback="Loading...">
      <Layout>
        {heroModule}
        <section className="container flex justify-between gap-8 flex-wrap">
          <article className="md:w-1/2 ">{otherModules}</article>
          <aside className="md:w-1/3 md:py-24">
            <h3 className="mt-0">
              Upcoming {data?.sanityTraining?.title} Training
            </h3>
            <ul>
              <li className="flex items-center justify-between border-b-2 border-teal-500 py-4">
                <div>
                  <p className="m-0">Location</p>
                  <small className="m-0">May 1, 2022</small>
                </div>
                <Button bgColor="rust" className="button-sm mt-0">
                  Register
                </Button>
              </li>
              <li className="flex items-center justify-between border-b-2 border-teal-500 py-4">
                <div>
                  <p className="m-0">Location</p>
                  <small className="m-0">May 1, 2022</small>
                </div>
                <Button bgColor="rust" className="button-sm mt-0">
                  Register
                </Button>
              </li>
              <li className="flex items-center justify-between border-b-2 border-teal-500 py-4">
                <div>
                  <p className="m-0">Location</p>
                  <small className="m-0">May 1, 2022</small>
                </div>
                <Button bgColor="rust" className="button-sm mt-0">
                  Register
                </Button>
              </li>
            </ul>
          </aside>
        </section>
      </Layout>
    </React.Suspense>
  );
};
export default SanityPage;

export const query: StaticQueryDocument = graphql`
  query SanityTrainingQuery($id: String) {
    sanityTraining(id: { eq: $id }) {
      title
      slug {
        current
      }
      content {
        __typename
        ...SanityHero
        ...SanityTextWithImageSection
        ...SanityTextSection
        ...SanityImageGallery
      }
    }
  }
`;
