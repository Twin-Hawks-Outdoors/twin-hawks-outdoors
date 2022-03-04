import React, { ReactNode } from 'react'
import Header from './Header'

function Layout({children}: {children: ReactNode}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>
        this is the footer
      </footer>
    </>
  )
}

export default Layout
