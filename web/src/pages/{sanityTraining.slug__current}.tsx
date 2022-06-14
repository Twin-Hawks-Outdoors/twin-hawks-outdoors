/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { graphql } from 'gatsby';
import type { PageProps, StaticQueryDocument } from 'gatsby';
import React from 'react';
import { SanityTrainingQueryQuery } from '../../graphql-types';
import Layout from '../components/Layout';
import { formatDate } from '../lib/formatDate';

const SanityPage = ({
  data,
  location,
  serverData,
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
  const otherModules = modules && modules?.slice(1, modules.length - 1);
  const imageGallery = modules && modules?.[modules.length - 1];
  const events = serverData?.events?.data.filter(
    ({ name }: { name: string }) => name === data?.sanityTraining?.title
  );

  return (
    <React.Suspense fallback="Loading...">
      <Layout location={location}>
        {heroModule}
        <section className="container ">
          <div className="flex justify-center md:justify-between gap-8 flex-wrap">
            <article className="md:w-1/2 ">{otherModules}</article>
            <aside className="md:w-1/3 pb-24 md:py-24 mx-auto">
              <h3 className="mt-0">
                Upcoming {data?.sanityTraining?.title} Training
              </h3>
              <ul>
                {events?.map((node) => (
                  <li
                    key={node.id}
                    className="flex items-center justify-between border-b-2 border-teal-500 py-4"
                  >
                    <div>
                      <p className="m-0">{node.venue.name}</p>
                      <small className="m-0 text-red-500 font-sans ">
                        {formatDate(node.start.iso as string)} -{' '}
                        {formatDate(node.end.iso as string)}
                      </small>
                    </div>
                    <a
                      rel="noopener noreferrer"
                      className="button-sm mt-0 bg-rust-500/90 hover:bg-rust-400 focus:bg-rust-400"
                      target="_blank"
                      href={node.url}
                    >
                      {node.call_to_action}
                    </a>
                  </li>
                ))}
                {events?.length < 1 && (
                  <p className="text-center">No events currently scheduled.</p>
                )}
              </ul>
            </aside>
          </div>
          <section className="w-full group pb-24">
            <h3 className="">Class Photos</h3>
            {imageGallery}
          </section>
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

export async function getServerData() {
  const now = Math.floor(Date.now() / 1000);
  const user = Buffer.from(process.env.TICKET_TAILOR_FRONTEND || '').toString(
    'base64'
  );
  const headersList = {
    Accept: 'application/json',
    Authorization: `Basic ${user}`,
  };
  const res = await fetch(
    `${process.env.TT_BASE_URL || ''}/v1/events?start_at.gte=${now}`,
    {
      headers: headersList,
      method: 'GET',
    }
  );

  const data = await res.json();

  return {
    props: {
      events: data,
    },
  };
}
