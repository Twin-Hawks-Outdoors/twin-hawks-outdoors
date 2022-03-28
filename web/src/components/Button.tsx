import { GatsbyLinkProps, Link } from 'gatsby';
import React from 'react';

const Button = ({ to, children }) => (
  <Link className="inline-block mt-8 bg-rust-500 button" to={to}>
    {children}
  </Link>
);

export default Button;
