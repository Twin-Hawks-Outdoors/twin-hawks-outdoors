// import { PortableText } from '@portabletext/react';
import { NavLink, useRouteLoaderData } from '@remix-run/react';
import type { SiteConfigDoc } from 'types/siteConfig';
import { Icon } from './ui/Icon';
import { cn } from '~/lib/misc';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '~/lib/portableTextComponents';

const iconMap = {
  facebook: (
    <Icon name="facebook" className="icon group-focus:text-[#4267b2] hover:text-[#4267B2]" />
  ),
  twitter: <Icon name='twitter' className="icon hover:text-[#1DA1F2]" />,
  snapchat: <Icon name="shield-question" className="icon hover:text-[#FFFC00]" />,
  instagram: <Icon name="instagram" className="icon hover:text-[#c13584]" />,
  linkedin: <Icon name="linkedin" className="icon hover:text-[#2867b2]" />,
  youtube: <Icon name="youtube"className="icon hover:text-[#FF0000]" />,
  default: <Icon name="shield-question" className="icon hover:text-gray-100" />,
};

function Footer() {
  const {data} = useRouteLoaderData("root") as {data: SiteConfigDoc}

  return (
    <footer className=" bg-black grid">
      <img
        src="/images/whitegrit.png"
        alt=""
        height={500}
        className="col-span-full row-start-1 col-start-1 brightness-50 "
      />
      <div className=" container mx-auto col-start-1 row-start-1 col-span-full flex flex-wrap items-center justify-center lg:justify-between gap-8 z-10">
        <div>
          <img
            width={200}
            height={200}
            src="/images/logo-inverted.svg"
            alt="logo"
          />
          <div className="text-white max-w-prose mt-8 prose-p:text-white prose-p:text-base prose-p:font-serif prose-p:tracking-wide">
            <PortableText components={portableTextComponents} value={data?.footerText || []} />
          </div>
        </div>
        <nav className=" text-white">
          <ul className="flex gap-8 flex-wrap justify-between items-center">
            {data?.footerNavigation?.map((item) => (
              <NavLink
                className={({ isActive }) => cn('font-sans uppercase', isActive ? "text-red-500 border-b-current border-b-2" : "text-white")}

                key={item?.slug}
                to={item?.slug}
              >
                {item?.title}
              </NavLink>
            ))}
          </ul>
        </nav>
        <div className="social-links flex gap-8 justify-center items-center">
          {data?.socialLinks?.map((item, index) => (
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
        <small className="w-full text-center text-white ">
          &copy; Twin Hawks Outdoors, All Rights Reserved | Developed by{" "}
          <a
            className="font-sans  text-sm text-teal-400 underline-offset-2"
            href="https://www.dauntlesspursuitmedia.com"
            rel="noreferrer"
            target="_blank"
          >
            Dauntless Pursuit Media
          </a>
        </small>
      </div>
    </footer>
  );
}

export default Footer;
