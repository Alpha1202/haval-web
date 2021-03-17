import React from "react";

import { InfoSection, HowItWorks } from "../../components";
import { sectionOne, howItWorksSection } from "./Data";
import { Navbar, Footer } from "../../components";

const HomePage = () => {
  return (
    <>
      <Navbar type="navbar"/>
      <InfoSection {...sectionOne} />
      <HowItWorks {...howItWorksSection} />
      <Footer />
    </>
  );
};

export default HomePage;
