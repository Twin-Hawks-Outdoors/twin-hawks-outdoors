import { json } from "@remix-run/node";
import groq from "groq";
import { postExcerptZ } from "types/post";
import { z } from "zod";
import { ImageQuery } from "~/components/MainImage";
import { client } from "~/sanity.server";

export const loader = async ({}) => {
  const posts = await client
    .fetch(
      groq`*[_type == "post"][0...20]{
		_id,
		title,
		_type,
		"slug": slug.current,
		_createdAt,
		excerpt,
		author->{_id, name, image{${ImageQuery}}},
		mainImage {
			${ImageQuery}
		},
		categories[]->{title}

	}`
    )
    .then((res) => (res ? z.array(postExcerptZ).parse(res) : null));

  return json(
    { posts },
    {
      headers: {
        "Cache-Control": "public, max-age=40000 s-maxage=40000",
      },
    }
  );
};
