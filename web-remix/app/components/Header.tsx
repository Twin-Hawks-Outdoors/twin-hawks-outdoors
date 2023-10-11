
import type { ReactElement } from 'react';
import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
// import { SiteConfigQuery } from '../../graphql-types';
import { Link, NavLink, useRouteLoaderData } from '@remix-run/react';
import type { SiteConfigDoc } from 'types/siteConfig';
import { MainImage } from './MainImage';

const Header = (): ReactElement => {
  const cart = useShoppingCart();
  const { cartCount, handleCartClick } = cart;
  const {mainNavigation, logo} = useRouteLoaderData('root') as {mainNavigation: SiteConfigDoc["mainNavigation"], logo: SiteConfigDoc["logo"]};

  return (
    <header className="flex items-center justify-between container mx-auto p-4">
      <Link to="/" className="w-24">
        <MainImage
          image={logo}
          alt="logo"
          height={100}
          width={100}
          mode="contain"
        />
      </Link>
      <nav className="flex gap-4 justify-end flex-wrap items-center ">
        {mainNavigation?.map((item) => (
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-red-500 border-b-current border-b-2" : ""
              } font-sans uppercase `
            }
            key={item?.slug}
            to={item?.slug}
          >
            {item?.title}
          </NavLink>
        ))}
        {cartCount && cartCount > 0 ? (
          <button
            aria-label="Show Cart"
            title="Show Cart"
            className="p-2 relative"
            type="button"
            onClick={() => handleCartClick()}
          >
            <small className="absolute rounded-full -right-0 -top-0 bg-red-400 flex items-center justify-center w-5 h-5 text-[12px] text-white">
              {cartCount}
            </small>
          </button>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
