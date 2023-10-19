import type { DataFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  useLoaderData,
} from "@remix-run/react";
import groq from "groq";
import { trainingZ } from "types/training";
import Layout from "~/components/Layout";
import { ImageQuery } from "~/components/MainImage";
import { Page } from "~/components/Page";
import { Hero, HeroSectionQuery } from "~/components/modules/Hero";
import {
  ImageGallery,
  ImageGalleryQuery,
} from "~/components/modules/ImageGallery";
import { TextSectionQuery } from "~/components/modules/TextSection";
import { TextWithImageQuery } from "~/components/modules/TextWithImageSection";
import { builder, client } from "~/sanity.server";
import type { EventsResponse } from "./resources.getEvents";
import { formatDate } from "~/lib/formatDate";

export const meta: MetaFunction<typeof loader> = ({ data, matches }) => {
  return [
    { title: `${data?.trainingClass?.title || ""} | ${matches[0]?.data?.data?.title}` },
    {
      name: "description",
      content:
        (data?.trainingClass?.description || matches[0]?.data?.data?.description) ?? "",
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
      name: `og:title`,
      content: `${data?.trainingClass?.title || ""} | ${matches[0]?.data?.data?.title}`,
    },
    {
      name: `og:description`,
      content:
        (data?.trainingClass?.description || matches[0]?.data?.data?.description) ?? "",
    },
  ];
};

export const loader = async ({ params, request }: DataFunctionArgs) => {
  const now = Math.floor(Date.now() / 1000);
  const user = Buffer.from(process.env.TICKET_TAILOR_FRONTEND!).toString(
    "base64"
  );
  const headersList = {
    Accept: "application/json",
    Authorization: `Basic ${user}`,
  };
  const trainingClassPromise = client
    .fetch(
      groq`
		*[_type == "training" && slug.current == $slug][0]{
			_type,
			_id,
			title,
			description,
			"slug":slug.current,
			openGraphImage {
				${ImageQuery}
			},
			content[] {
				_key,
				_type,
				${HeroSectionQuery},
				${TextWithImageQuery},
				${TextSectionQuery},
				${ImageGalleryQuery}
			}

		}
	`,
      {
        slug: `/training/${params.slug}/`,
      }
    )
    .then((res) => (res ? trainingZ.parse(res) : null));

  const eventsPromise = fetch(
    `${process.env.TT_BASE_URL!}/v1/events?start_at.gte=${now}`,
    {
      headers: headersList,
      method: "GET",
    }
  );

  let [trainingClass, res] = await Promise.all([
    trainingClassPromise,
    eventsPromise,
  ]);

  const events: EventsResponse = await res.json();

  if (!events?.data.length && !trainingClass) {
    throw new Response("No Events Found", { status: 404 });
  }

  if (!trainingClass) {
    throw new Response("No training class found", { status: 404 });
  }
  const truncatedEvents = events.data
    ?.filter((event) => event.name === trainingClass?.title)
    .map((node) => ({
      id: node?.id,
      cta: node?.call_to_action,
      description: node?.description,
      start: node?.start,
      end: node?.end,
      venue: node?.venue,
      name: node?.name,
      url: node?.url,
    }));

  const heroModule = trainingClass.content.filter(
    (module) => module?._type === "hero"
  )[0];

  const imageGallery = trainingClass.content.filter(
    (module) => module?._type === "imageGallery"
  )[0];
  const otherModules = trainingClass.content.filter(
    (module) => module?._type !== "hero" && module?._type !== "imageGallery"
  );


	const ogImage = builder.image(trainingClass.openGraphImage || {}).auto("format").quality(60).width(1200).height(627).crop("focalpoint").url()
  return json(
    {
      trainingClass,
      otherModules,
      heroModule,
      events: truncatedEvents,
      imageGallery,
			ogImage
    },
    {
      headers: {
        "Cache-Control": "public, max-age=5000 s-maxage=5000",
      },
    }
  );
};

export default function TrainingSlugRoute() {
  const {
    trainingClass,
    events,
    heroModule,
    otherModules,
    imageGallery: {_type,...imageGalleryRest} /* heroModule, otherModules, imageGallery */,
  } = useLoaderData<typeof loader>();
  console.log({ events });
  return (
    <Layout>
      {/* {heroModule} */}

      <Hero {...heroModule} _type="hero" />
      <section className="container ">
        <div className="flex justify-center md:justify-between gap-8 flex-wrap">
          <article className="md:w-1/2 ">
            <Page content={otherModules} />
          </article>
          <aside className="md:w-1/3 pb-24 md:py-24 mx-auto">
            <h3 className="mt-0">Upcoming {trainingClass?.title} Classes</h3>
            <ul className="@container">
              {events?.map((node) => (
                <li
                  key={node.id}
                  className="flex items-center gap-2 flex-col @sm:flex-row justify-between border-b-2 border-teal-500 py-4"
                >
                  <div className="self-start">
                    <p className="m-0">{node.venue.name}</p>
                    <small className="m-0 text-red-500 font-sans ">
                      {formatDate(node.start.iso, { includeTime: true })} -{" "}
                      {formatDate(node.end.iso, { includeTime: true })}
                    </small>
                  </div>
                  <a
                    rel="noopener noreferrer"
                    className="button-sm mt-0 bg-rust-500/90 hover:bg-rust-400 focus:bg-rust-400 self-end"
                    target="_blank"
                    href={node.url}
                  >
                    {node.cta}
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
          <ImageGallery _type="imageGallery" {...imageGalleryRest} />
        </section>
      </section>
    </Layout>
  );
}
