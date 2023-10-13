import groq from "groq";
import React, { Suspense } from "react";
import { z } from "zod";


const ComponentMap = {
  contactForm: React.lazy(async () => {
    const { ContactForm: Component } = await import("../ContactForm");
    return {
      default: Component,
    };
  }),
  eventList: React.lazy(async () => {
    const { EventList: Component } = await import("../EventList");
    return {
      default: Component,
    };
  }),
  productList: React.lazy(async () => {
    const { ProductList: Component } = await import("../ProductList");
    return {
      default: Component,
    };
  }),
} as const;

export const UiComponentQuery = groq`
	_type == "uiComponentRef" => {
		_type,
		_key,
		name
	}
`

export const uiComponentRefZ = z.object({
	_type: z.literal('uiComponentRef'),
	_key: z.string().nullish(),
	name: z.string(),
})
export function UIComponent({name }: z.infer<typeof uiComponentRefZ>) {
	const Component = ComponentMap[name as keyof typeof ComponentMap];
  return <Suspense fallback={<div>Loading component...</div>}><Component  key={name} /></Suspense>
}

export default UIComponent;
