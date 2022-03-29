import { GatsbyLinkProps, Link } from 'gatsby';
import React, { ReactNode } from 'react';

const BG_COLORS = {
  red: 'bg-red-500/90 hover:bg-red-400 focus:bg-red-400',
  rust: 'bg-rust-500/90 hover:bg-rust-400 focus:bg-rust-400',
  teal: 'bg-teal-500/90 hover:bg-teal-400 focus:bg-teal-400',
  default: 'bg-rust-500/90 hover:bg-rust-400 focus:bg-rust-400',
};
const Button = ({
  to,
  children,
  bgColor = 'default',
}: {
  to: string;
  children: ReactNode;
  bgColor?: string;
}) => (
  <Link
    className={`inline-block mt-8 button ${
      BG_COLORS[bgColor as keyof typeof BG_COLORS]
    }`}
    to={to}
  >
    {children}
  </Link>
);

export default Button;
