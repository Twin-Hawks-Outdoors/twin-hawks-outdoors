import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { ReactElement } from 'react';
import { BsCart4 } from 'react-icons/bs';
import { useShoppingCart } from 'use-shopping-cart';
import { SiteConfigQuery } from '../../graphql-types';

const Header = (): ReactElement => {
  const cart = useShoppingCart();
  const { cartCount, handleCartClick } = cart;
  const { sanitySiteConfig } = useStaticQuery<SiteConfigQuery>(graphql`
    query SiteConfig {
      sanitySiteConfig {
        _id
        _type
        url
        logo {
          alt
          asset {
            gatsbyImageData(
              height: 100
              formats: AUTO
              layout: FIXED
              placeholder: BLURRED
              fit: FILL
            )
          }
        }
        socialLinks {
          url
          platform
        }
        mainNavigation {
          slug {
            current
          }
          page {
            title
          }
          disallowRobots
          includeInSitemap
        }
      }
    }
  `);

  return (
    <header className="flex items-center justify-between container mx-auto p-4">
      <Link to="/">
        <GatsbyImage
          image={
            sanitySiteConfig?.logo?.asset?.gatsbyImageData as IGatsbyImageData
          }
          alt="logo"
        />
      </Link>
      <nav className="flex gap-4 justify-end flex-wrap items-center ">
        {sanitySiteConfig?.mainNavigation?.map((item) => (
          <Link
            key={item?.slug?.current}
            className="font-sans uppercase  border-b-cu  "
            activeClassName="text-red-500 border-b-current border-b-2"
            to={item?.slug?.current as string}
          >
            {item?.page?.title}
          </Link>
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
            <BsCart4 className="w-6 h-6 text-red-400 font-bold" />
          </button>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
