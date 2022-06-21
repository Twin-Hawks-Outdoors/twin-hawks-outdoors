import { PortableText } from '@portabletext/react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsQuestionCircle,
  BsSnapchat,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs';
import { FooterQuery } from '../../graphql-types';

const iconMap = {
  facebook: (
    <BsFacebook className="icon group-focus:text-[#4267b2] hover:text-[#4267B2]" />
  ),
  twitter: <BsTwitter className="icon hover:text-[#1DA1F2]" />,
  snapchat: <BsSnapchat className="icon hover:text-[#FFFC00]" />,
  instagram: <BsInstagram className="icon hover:text-[#c13584]" />,
  linkedin: <BsLinkedin className="icon hover:text-[#2867b2]" />,
  youtube: <BsYoutube />,
  default: <BsQuestionCircle className="icon hover:text-gray-100" />,
};

function Footer() {
  const data = useStaticQuery<FooterQuery>(graphql`
    query Footer {
      sanitySiteConfig {
        _rawFooterText(resolveReferences: { maxDepth: 10 })
        socialLinks {
          platform
          _key
          url
        }
        footerNavigation {
          id
          slug {
            current
          }
          page {
            title
          }
        }
      }
    }
  `);

  const { sanitySiteConfig } = data;

  return (
    <footer className=" bg-black grid">
      <StaticImage
        src="../images/whitegrit.png"
        alt=""
        height={500}
        className="col-span-full row-start-1 col-start-1 brightness-50 "
      />
      <div className="py-12 container mx-auto col-start-1 row-start-1 col-span-full flex flex-wrap items-center justify-center lg:justify-between gap-8 z-10">
        <div>
          <StaticImage
            width={200}
            height={200}
            src="../images/logo-inverted.svg"
            alt="logo"
          />
          <div className="text-white max-w-prose mt-8 prose-p:text-white prose-p:text-base prose-p:font-serif prose-p:tracking-wide">
            <PortableText value={sanitySiteConfig?._rawFooterText} />
          </div>
        </div>
        <nav className=" text-white">
          <ul className="flex gap-8 flex-wrap justify-between items-center">
            {sanitySiteConfig?.footerNavigation?.map((item) => (
              <Link
                className="font-sans uppercase text-white "
                activeClassName="text-red-500 border-b-current border-b-2"
                key={item?.id}
                to={item?.slug?.current as string}
              >
                {item?.page?.title}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="social-links flex gap-8 justify-center items-center">
          {sanitySiteConfig?.socialLinks?.map((item, index) => (
            <a
              key={item?._key || index}
              target="_BLANK"
              href={item?.url as string}
              rel="noreferrer"
              className="text-white focus:ring-offset-4 rounded-full focus:ring-offset-black group"
            >
              {
                iconMap[
                  (item?.platform as keyof typeof iconMap) ??
                    ('default' as keyof typeof iconMap)
                ]
              }
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
