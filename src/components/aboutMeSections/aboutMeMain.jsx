import React from "react";
import AboutMeImg from "./aboutMeImg";
import AboutMeText from "./aboutMeText";
function AboutMeMain() {
  return (
    <div className="w-full max-w-[1200px] px-4 flex gap-12 mx-auto justify-between items-center md:flex-row sm:flex-col ">
      <div>
        <AboutMeText />
      </div>
      <div>
        <AboutMeImg />
      </div>
    </div>
  );
}

export default AboutMeMain;
