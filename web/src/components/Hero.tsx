import { Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";

const Hero = () => {
  return (
    <section className="hero min-h-max grid">
      <StaticImage
        className="row-start-1 col-span-full filter brightness-50"
        alt="sam making a fire from scratch"
        src="../images/hero-img.jpg"
        loading="eager"
        layout="fullWidth"
        aspectRatio={16 / 9}
        placeholder="dominantColor"
      />
      <StaticImage
        className="row-start-1 col-span-full filter brightness-50"
        alt="sam making a fire from scratch"
        src="../images/whitegrit.png"
        loading="eager"
        layout="fullWidth"
        aspectRatio={16 / 9}
        placeholder="none"
      />
      <div className="text-white p-24 row-start-1 col-span-full z-10">
        <h1 className="uppercase">Find YOUR Frontier!</h1>
        <p className="text-white">
          Journey with us back to the roots of American Frontier life, and learn
          how to live off the land!
        </p>
        <Link to="/classes">Learn More!</Link>
      </div>
    </section>
  );
};

export default Hero;
