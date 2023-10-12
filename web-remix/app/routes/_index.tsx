import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import groq from "groq";
import { siteConfigZ } from "types/siteConfig";
import Layout from "~/components/Layout";
import { Page, PageQuery } from "~/components/Page";
import { client } from "~/sanity.server";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({}) => {
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

  return json({ page: data.frontpage });
};

export default function Index() {
  const { page } = useLoaderData<typeof loader>();
  return (
    <Layout>
      <Page content={page.content} />
    </Layout>
  );
}
