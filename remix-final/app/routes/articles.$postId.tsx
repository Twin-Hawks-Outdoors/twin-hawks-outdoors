import { PortableText } from "@portabletext/react";
import type { DataFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import groq from "groq";
import { postZ } from "types/post";
import Layout from "~/components/Layout";
import { ImageQuery, MainImage } from "~/components/MainImage";
import { Icon } from "~/components/ui/Icon";
import { formatDate } from "~/lib/formatDate";
import { portableTextComponents } from "~/lib/portableTextComponents";
import { builder, client } from "~/sanity.server";

export const meta: MetaFunction<typeof loader> = ({ data, matches }) => {
  return [
    { title: `${data?.post?.title || ""} | ${matches[0]?.data?.data?.title}` },
    {
      name: "description",
      content:
        (data?.post?.excerpt || matches[0]?.data?.data?.description) ?? "",
    },
    {
      name: "og:image",
      content: data?.ogImage || "",
    },
    {
      property: `og:type`,
      content: `article`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:title`,
      content: `${data?.post?.title || ""} | ${matches[0]?.data?.data?.title}`,
    },
    {
      name: `twitter:description`,
      content:
        (data?.post?.excerpt || matches[0]?.data?.data?.description) ?? "",
    },
  ];
};
export const loader = async ({ params, request }: DataFunctionArgs) => {

  const post = await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
		title,
		_id,
		_type,
		excerpt,
		categories[],
		_createdAt,
		"slug":slug.current,
		mainImage {
			${ImageQuery}
		},
		body,
		author->{
			name,
			photo {
				${ImageQuery}
			},
			_id
		}
	}`,
    {
      slug: `/articles/${params.postId}/`,
    }
  ).then(res => res ? postZ.parse(res) : null)

  if (!post) {
    throw new Response("No post found", { status: 404 });
  }

	const ogImage = builder.image(post?.mainImage ?? {}).auto("format").quality(60).width(1200).height(627).crop("focalpoint").url()
  return json(
    {
      post,
			ogImage
    },
    { headers: { "Cache-Control": "public, max-age=86400 s-maxage=86400" } }
  );
};

export default function ArticleRoute() {
  const { post } = useLoaderData<typeof loader>();
  return (
    <Layout>
      <article>
        <header className="aspect-[21/9]   grid">
          {post?.mainImage && (
            <MainImage
              image={post?.mainImage}
              alt={post?.mainImage?.asset?.altText ?? ""}
              width={1200}
							mode="cover"
              className="md:aspect-[21/9] w-full object-cover row-start-1 col-start-1 col-span-full filter transition-all sepia hover:sepia-0"
            />
          )}
          <h1 className=" m-0 w-max px-4 text-white rounded-sm container row-start-1 col-start-1 col-span-full z-10 text-center self-center place-self-center bg-opacity-30 bg-red-600 backdrop-blur-sm">
            {post?.title}
          </h1>
        </header>
        <section className="container  prose-p:max-w-prose prose-p:mx-auto">
          <div className=" my-16 flex items-center gap-4 max-w-prose mr-auto">
            {post?.author?.photo ? (
              <MainImage
                image={post?.author?.photo}
                alt={post?.author?.name}
                className="rounded-full"
                width={75}
                height={75}
              />
            ) : (
              <span className="block  bg-gradient-to-br from-cream-100 to-cream-50  rounded-full overflow-clip ">
                <Icon name="shield-question" className="w-16 h-16" />
              </span>
            )}
            <div>
              <h6 className="m-0">{post?.author?.name}</h6>
              <small className="text-red-500">
                Posted {formatDate(post?._createdAt, {includeTime: false})}
              </small>
            </div>
          </div>

          <PortableText
            value={post?.body}
            components={portableTextComponents}
          />
        </section>
      </article>
    </Layout>
  );
}
