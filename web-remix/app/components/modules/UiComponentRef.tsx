// import React, { ReactNode } from 'react';
// import { SanityUiComponentRef } from '../../../graphql-types';

import groq from "groq";
import { z } from "zod";

// const ContactForm = React.lazy(() => import('../ContactForm'));
// const EventList = React.lazy(() => import('../EventList'));
// const ProductList = React.lazy(() => import('../ProductList'));
// const ComponentMap = {
//   contactForm: <ContactForm />,
//   eventList: <EventList />,
//   productList: <ProductList />,
// };

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
  return <div>{name}</div>
}

export default UIComponent;
