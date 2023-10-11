
import { Link } from '@remix-run/react';
import type {  ReactNode } from 'react';
import React from 'react';

// interface TState {
//   to: string;
//   className?: string;
//   activeClassName?: string;
//   partiallyActive?: boolean;
//   ref: any;
// }

const isExternalLink = (path: string) =>
  path?.startsWith(`http://`) ||
  path?.startsWith(`https://`) ||
  path?.startsWith(`//`);

export function UniversalLink({
  children,
  to,

  className,
	...props
}: {children: ReactNode; to: string; className?: string} ) {
  const { ...rest } = props;

  if (!isExternalLink(to as string)) {
    return (
      <Link
				prefetch='intent'
				to={to}
        className={className}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={to}
      className={className}
      {...rest}
      target="_BLANK"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default UniversalLink;
