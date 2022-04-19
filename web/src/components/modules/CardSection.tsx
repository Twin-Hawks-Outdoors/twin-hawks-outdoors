/* eslint-disable @typescript-eslint/no-unsafe-return */
import { PageProps } from 'gatsby';
import React from 'react';
import {
  Maybe,
  SanityCardSection,
  SanityPopupOrPostOrProductOrTraining,
} from '../../../graphql-types';
import PrettyJson from '../PrettyJson';

interface ExtendedCardSection extends SanityCardSection {
  cards?:
    | Maybe<
        Maybe<SanityPopupOrPostOrProductOrTraining & { __typename: string }>[]
      >
    | undefined;
}

const CardSection = ({
  props,
}: {
  props: ExtendedCardSection & { location: PageProps['location'] };
}) => {
  const cardModules = props?.cards?.map((card, idx) => {
    const typename = `${
      card?.__typename.replace('Sanity', '') as string
    }Excerpt`;
    console.log(typename);

    const ExcerptComponent = React.lazy(() => import(`./${typename}`));

    return <ExcerptComponent props={card} key={card?._id} />;
  });

  return (
    <section className="container py-12 md:py-24 grid md:grid-cols-2 gap-16">
      <h2 className="m-0 col-span-full">{props?.heading}</h2>
      <React.Suspense fallback="Loading data...">{cardModules}</React.Suspense>
    </section>
  );
};

export default CardSection;
