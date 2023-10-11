import type { PortableTextComponents } from "@portabletext/react";
import { PortableText } from "@portabletext/react";
import Button from "../Button";
import { z } from "zod";
import { ctaZ } from "types/shared";
import groq from "groq";

export const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-white max-w-md m-0 text-center">{children}</p>
    ),
  },
};

export const ctaSectionZ = z.object({
  _type: z.literal("ctaSection"),
  _key: z.string().nullish(),
  heading: z.string().nullish(),
  cta: ctaZ,
	body: z.any()
});

export const CtaSectionQuery = groq`
	_type == "ctaSection" => {
		_type,
		_key,
		heading,
		cta {
			title,
			route->{
				_id,
				title,
				"slug": slug.current,
			},
			link,

		},
		body,
	}
`

export function CtaSection({ cta, heading, _key, body }: z.infer<typeof ctaSectionZ>) {
  return (
    <section className="grid place-items-center ">
			<img src="/images/foggy-mountain.jpg" alt="foggy mountain" width={600} className="filter sepia brightness-[.25] row-start-1 col-span-full col-start-1 md:aspect-[21/9] h-max lg:aspect-[30/9] object-cover object-center w-full" />
      {/* <StaticImage
        className="filter sepia brightness-[.25] row-start-1 col-span-full col-start-1 md:aspect-[21/9] h-max lg:aspect-[30/9] xl:aspect-auto xl:max-h-80"
        src="../../images/foggy-mountain.jpg"
        quality={65}
        alt="foggy mountain with trees"
        objectPosition="center bottom"
        objectFit="cover"
      /> */}
      <div className="row-start-1 col-start-1 z-10 flex flex-wrap items-center justify-center  gap-8">
        <div className="max-w-prose">
          <PortableText
            components={components}
            key={_key}
            value={body}
          />
        </div>
        <Button
          to={(cta?.route?.slug || cta?.link) as string}
          className="mt-0"
          bgColor="red"
        >
          {cta?.title}
        </Button>
      </div>
    </section>
  );
}

export default CtaSection;
