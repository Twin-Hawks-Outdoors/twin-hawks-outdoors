import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { ReactElement } from 'react';
import { SiteConfigQuery } from '../../graphql-types';

const Header = (): ReactElement => {
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
  console.log(sanitySiteConfig);

  return (
    <header className="flex items-center justify-between container p-4">
      <Link to="/">
        <GatsbyImage
          image={
            sanitySiteConfig?.logo?.asset?.gatsbyImageData as IGatsbyImageData
          }
          alt="logo"
        />
      </Link>
      <nav className="flex gap-4 justify-end ">
        {sanitySiteConfig?.mainNavigation?.map((item) => (
          <Link
            key={item?.slug?.current}
            className="font-sans uppercase"
            to={item?.slug?.current as string}
          >
            {item?.page?.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
