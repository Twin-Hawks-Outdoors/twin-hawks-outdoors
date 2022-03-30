import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
