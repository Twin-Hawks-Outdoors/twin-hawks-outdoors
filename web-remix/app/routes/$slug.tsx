import type { DataFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import groq from "groq";
import { Suspense, lazy } from "react";
import { pageZ } from "types/page";
import { z } from "zod";
import Layout from "~/components/Layout";
import { Page, PageQuery } from "~/components/Page";
import PrettyJson from "~/components/PrettyJson";
import { Skeleton } from "~/components/Skeleton";
import { client } from "~/sanity.server";

const LazyBlogList = lazy(async () => {
  const { BlogList: Component } = await import("~/components/BlogList");
  return {
    default: Component,
  };
});

export const loader = async ({ params }: DataFunctionArgs) => {
  const slug = params.slug;
  if (!slug) {
    throw new Response("Slug must be provided", { status: 400 });
  }

  const pageData = await client
    .fetch(
      groq`{"page":*[_type == "page" && slug.current == $slug][0] {
			${PageQuery}
		}, "blogPageId": *[_type== "siteConfig"][0].blogpage->_id}`,
      {
        slug: `/${slug}/`,
      }
    )
    .then((res) =>
      res ? z.object({ page: pageZ, blogPageId: z.string() }).parse(res) : null
    );

  if (!pageData?.page) {
    throw new Response("No page found", { status: 404 });
  }
  return json({ pageData });
};

export default function NestedRoute() {
  const {
    pageData: { page, blogPageId },
  } = useLoaderData<typeof loader>();
  return (
    <Layout>
      <Page content={page.content } />
      <Suspense fallback={<Skeleton />}>
        {page._id === blogPageId && <LazyBlogList />}
      </Suspense>
    </Layout>
  );
}
