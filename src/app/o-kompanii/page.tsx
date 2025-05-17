import AsortimentBlock2 from "@/components/asortiment-block-2";
import Features01Page from "@/components/features-01/features-01";
import Features03Page from "@/components/features-03/features-03";
import { AboutHero } from "@/components/hero/AboutHero";
import { AboutHero2 } from "@/components/hero/AboutHero-2";

import React from "react";

const About = () => {
  return (
    <>
    <AboutHero/>
    <AsortimentBlock2 />
    <AboutHero2/>
    <Features01Page/>
    <Features03Page/>
    </>
  );
};

export default About;
