import React from "react";

import { InfoSection, HowItWorks } from "../../components";
import { sectionOne, howItWorksSection } from "./Data";

const HomePage = () => {
  return (
    <>
      <InfoSection {...sectionOne} />
      <HowItWorks {...howItWorksSection}/>
    </>
  );
};

export default HomePage;
