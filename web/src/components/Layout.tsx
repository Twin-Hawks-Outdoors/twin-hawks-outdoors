import React, { ReactNode } from 'react';
import Header from './Header';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <footer>this is the footer</footer>
    </div>
  );
}

export default Layout;
