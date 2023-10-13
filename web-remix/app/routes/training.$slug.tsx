import type { DataFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import groq from "groq";
import React from "react";
import type { TrainingDoc } from "types/training";
import { trainingZ } from "types/training";
import Layout from "~/components/Layout";
import { ImageQuery } from "~/components/MainImage";
import { Page } from "~/components/Page";
import  {Hero, HeroSectionQuery } from "~/components/modules/Hero";
import {ImageGallery, ImageGalleryQuery } from "~/components/modules/ImageGallery";
import { TextSectionQuery } from "~/components/modules/TextSection";
import { TextWithImageQuery } from "~/components/modules/TextWithImageSection";
import { client } from "~/sanity.server";

export const loader = async ({ params, request }: DataFunctionArgs) => {
  const trainingClass = await client
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

  if (!trainingClass) {
    throw new Response("No training class found", { status: 404 });
  }

  const heroModule = trainingClass.content.filter(
    (module) => module?._type === "hero"
  )[0];

	const imageGallery= trainingClass.content.filter(
		(module) => module?._type === "imageGallery"
	)[0];
  const otherModules = trainingClass.content.filter(
    (module) => module?._type !== "hero" && module?._type !== "imageGallery"
  )


  const events: string[] = [];

  return json({
    trainingClass,
		otherModules,
		heroModule,
    events,
		imageGallery
  });
};

export default function TrainingSlugRoute() {
  const { trainingClass, events, heroModule, otherModules,imageGallery /* heroModule, otherModules, imageGallery */ } =
    useLoaderData<typeof loader>();



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

          </aside>
        </div>
        <section className="w-full group pb-24">
          <h3 className="">Class Photos</h3>
          <ImageGallery {...imageGallery} />
        </section>
      </section>
    </Layout>
  );
}
