import { PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import { Seo } from '../components/Seo';

export default function Success({ location }: PageProps) {
  return (
    <Layout location={location}>
      <Seo title="Success" />
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h1>Success!!</h1>
        <p>We will be reaching out to you shortly to answer your questions!</p>
      </div>
    </Layout>
  );
}
