import React, { ReactNode } from 'react';
import { SanityUiComponentRef } from '../../../graphql-types';

const ContactForm = React.lazy(() => import('../ContactForm'));
const EventList = React.lazy(() => import('../EventList'));
const ProductList = React.lazy(() => import('../ProductList'));
const ComponentMap = {
  contactForm: <ContactForm />,
  eventList: <EventList />,
  productList: <ProductList />,
};

function UIComponent({ props }: { props: SanityUiComponentRef }): ReactNode {
  return ComponentMap[props?.name as keyof typeof ComponentMap];
}

export default UIComponent;
