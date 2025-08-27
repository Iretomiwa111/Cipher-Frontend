import React from "react";
import HeroSection from "./Sections/Landing/FirstSection";
import SecSection from "./Sections/Landing/SecSection";
import ServicesSection from "./Sections/Landing/ThirdSection";
import AboutSection from "./Sections/Landing/FourthSection";
import StatsSection from "./Sections/Landing/fifthSection";
import SixthSection from "./Sections/Landing/SixthSection";
import ContactSection from "./Sections/Landing/LastSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SecSection />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <SixthSection />
      <ContactSection />
    </>
  );
};

export default Home;
