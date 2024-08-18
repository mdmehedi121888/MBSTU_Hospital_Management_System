import React from "react";
import Hero from "../components/Hero";
import Biography from "./../components/Biography";

const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | MBSTU Medical Center"}
        imageUrl={"/about.png"}
      ></Hero>
      <Biography imageUrl={"/whoweare.png"}></Biography>
    </>
  );
};

export default AboutUs;
