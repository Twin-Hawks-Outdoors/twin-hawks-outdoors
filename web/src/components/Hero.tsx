import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Hero = () => {
  return (
    <section className="hero min-h-max grid">
      <StaticImage
        className="row-start-1 col-span-full filter brightness-50 md:aspect-video xl:aspect-[21/9]"
        alt="sam making a fire from scratch"
        src="../images/hero-img.jpg"
        loading="eager"
        layout="fullWidth"
        // aspectRatio={16 / 9}
        placeholder="dominantColor"
      />
      <StaticImage
        className="row-start-1 col-span-full filter brightness-50 md:aspect-video xl:aspect-[21/9] z-10 pointer-events-none"
        alt="grit"
        src="../images/whitegrit.png"
        loading="eager"
        layout="fullWidth"
        placeholder="none"
      />
      <div className="text-white p-24 row-start-1 col-span-full z-0">
        <h1 className="">Find YOUR Frontier!</h1>
        <p className="text-white max-w-md ">
          Journey with us back to the roots of American Frontier life, and learn
          how to live off the land!
        </p>
        <Link to="/classes" className="button bg-red-500/90 hover:bg-red-400 focus:bg-red-400  ">Learn More!</Link>

      </div>
    </section>
  );
};

export default Hero;
