import Hero from "@/components/Hero";
import HeroSubText from "@/components/HeroSubText";
import WorkContent from "@/components/WorkContent";
import React from "react";
import Subscribe from "@/components/Subscribe";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <HeroSubText />
      <WorkContent />
      <Subscribe />
    </div>
  );
};

export default HomePage;
