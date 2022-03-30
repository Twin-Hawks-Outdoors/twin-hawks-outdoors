import loadable from '@loadable/component';
import pascalCase from 'just-pascal-case';
import React from 'react';
import { SanityUiComponentRef } from '../../../graphql-types';


const getUiComponent = (type: string) => {
  const formattedType = pascalCase(type);

  const Component = loadable(() => import(`../${formattedType}`));
  return <Component type={type} />;
};

function UIComponent({ props }: { props: SanityUiComponentRef }) {
  return <>{getUiComponent(props.name as string)} </>;
}

export default UIComponent;
