import { parse } from "@conform-to/zod";
import type { ActionFunctionArgs, DataFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import groq from "groq";
import { Suspense, lazy } from "react";
import { pageZ } from "types/page";
import { z } from "zod";
import { contactSchema } from "~/components/ContactForm";
import Layout from "~/components/Layout";
import { Page, PageQuery } from "~/components/Page";
import { Skeleton } from "~/components/Skeleton";
import { sendMessage } from "~/lib/sendMessage.server";
import { builder, client } from "~/sanity.server";
import { ErrorBoundary as RouteErrorBoundary } from "~/components/ErrorBoundary";

const LazyBlogList = lazy(async () => {
  const { BlogList: Component } = await import("~/components/BlogList");
  return {
    default: Component,
  };
});

export const meta: MetaFunction<typeof loader> =   ({ data, matches }) => {
	const page = data?.pageData?.page

  return [
    { title: `${page?.title || ""} | ${matches[0]?.data?.data?.title}` },
    {
      name: "description",
      content:
        (page?.description || matches[0]?.data?.data?.description) ?? "",
    },
    {
      name: "og:image",
      content: data?.ogImage || "",
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:title`,
      content: `${page?.title || ""} | ${matches[0]?.data?.data?.title}`,
    },
    {
      name: `twitter:description`,
      content:
        (page?.description || matches[0]?.data?.data?.description) ?? "",
    },
  ];
};


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
      res
        ? z.object({ page: pageZ, blogPageId: z.string() }).parse(res)
        : null
    );



  if (!pageData?.page || !pageData) {
    throw new Response("No page found", { status: 404 });
  }

	const ogImage = builder.image(pageData?.page?.openGraphImage ?? "")?.auto("format").quality(60).width(1200).height(627).crop("focalpoint").url()
  return json({ pageData, ogImage }, { headers: { "Cache-Control": "public, max-age=86400 s-maxage=86400" } });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const submission = parse(formData, { schema: contactSchema });
  // Report the submission to client
  // 1) if the intent is not `submit`, or
  // 2) if there is any error
  if (submission.intent !== "submit" || !submission.value) {
    return json(submission);
  }

  if (submission.value?.["got-ya"]?.length) {
    throw new Response("Bot detected", { status: 500 });
  }

  return await sendMessage(submission.value);
};

export default function NestedRoute() {
  const {
    pageData: { page, blogPageId },
  } = useLoaderData<typeof loader>();
  return (
    <Layout>
      <Page content={page?.content ?? []} />
      <Suspense fallback={<Skeleton />}>
        {page?._id === blogPageId && <LazyBlogList />}
      </Suspense>
    </Layout>
  );
}

export function ErrorBoundary() {
  return <RouteErrorBoundary />;
}
