import { Link as GatsbyLink } from 'gatsby';
import type { GatsbyLinkProps } from 'gatsby';
import React from 'react';

interface IState {
  to: string;
  className?: string;
  activeClassName?: string;
  partiallyActive?: boolean;
  ref: any;
}

const isExternalLink = (path: string) =>
  path?.startsWith(`http://`) ||
  path?.startsWith(`https://`) ||
  path?.startsWith(`//`);

function UniversalLink<TState>({
  children,
  to,
  className,
  activeClassName,
  partiallyActive,
  ...props
}: React.PropsWithoutRef<GatsbyLinkProps<TState>> & {
  to: string;
  className?: string;
  activeClassName?: string;
  partiallyActive?: boolean;
}) {
  const { ...rest } = props;

  if (!isExternalLink(to)) {
    return (
      <GatsbyLink<TState>
        to={to}
        className={className}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...rest}
      >
        {children}
      </GatsbyLink>
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
