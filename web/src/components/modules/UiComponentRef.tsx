import React, { ReactNode } from 'react';
import { SanityUiComponentRef } from '../../../graphql-types';

const ContactForm = React.lazy(() => import('../ContactForm'));
const EventList = React.lazy(() => import('../EventList'));

const ComponentMap = {
  contactForm: <ContactForm />,
  eventList: <EventList />,
};

function UIComponent({ props }: { props: SanityUiComponentRef }): ReactNode {
  return ComponentMap[props?.name as keyof typeof ComponentMap];
}

export default UIComponent;
