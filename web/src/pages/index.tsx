import * as React from "react";
import CardSection from "../components/CardSection";
import Hero from "../components/Hero";
import TextWithImage from "../components/TextWithImage";

// markup
const IndexPage = () => {
  return (
    <>
      {/* Hero section */}
      <Hero />
      {/* About section */}
      <TextWithImage />
      {/* Featured Products */}
      <CardSection />
      {/* Upcoming Classes */}
      <CardSection />
      {/* Featured Posts */}
      <CardSection />
    </>
  );
};

export default IndexPage;
