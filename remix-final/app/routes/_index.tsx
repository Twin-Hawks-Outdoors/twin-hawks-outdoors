import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import groq from "groq";
import {  siteConfigZ } from "types/siteConfig";
import Layout from "~/components/Layout";
import { Page, PageQuery } from "~/components/Page";
import { builder, client } from "~/sanity.server";
import { ErrorBoundary as RouteErrorBoundary } from "~/components/ErrorBoundary";

export const meta: MetaFunction<typeof loader> = ({ data, matches }) => {
  return [
    { title: `${data?.page?.title || ""} | ${matches[0]?.data?.data?.title}` },
    {
      name: "description",
      content:
        (data?.page?.description || matches[0]?.data?.data?.description) ?? "",
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
      content: `${data?.page?.title || ""} | ${matches[0]?.data?.data?.title}`,
    },
    {
      name: `twitter:description`,
      content:
        (data?.page?.description || matches[0]?.data?.data?.description) ?? "",
    },
  ];
};

export const loader = async () => {
  const data = await client
    .fetch(
      groq`
		*[ _type == "siteConfig"][0] {
			_type,
			_id,
			frontpage->{
				_type,
				${PageQuery}
			}
		}
	`
    )
    .then((res) =>
      res
        ? siteConfigZ
            .pick({ _id: true, _type: true, frontpage: true })
            .parse(res)
        : null
    );

  if (!data) {
    throw new Response("Page not found", { status: 404 });
  }

  const ogImage = builder
    .image(data?.frontpage?.openGraphImage ?? {})
    ?.auto("format")
    .quality(60)
    .width(1200)
    .height(627)
    .crop("focalpoint")
    .url();

  return json(
    { page: data.frontpage, ogImage },
    {
      headers: {
        "Cache-Control":
          "public, max-age=5000 s-maxage=5000 stale-while-revalidate=5000",
      },
    }
  );
};

export default function Index() {
  const { page } = useLoaderData<typeof loader>();
  return (
    <Layout>
      <Page content={page.content} />
    </Layout>
  );
}
export function ErrorBoundary() {
  return <RouteErrorBoundary />;
}
