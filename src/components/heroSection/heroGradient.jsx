import React from "react";

function HeroGradient() {
  return (
    <div>
      <div className="absolute shadow-cyanBigShadow top-0 right-[400px] -z-10 animate-pulse"></div>
      <div className="absolute shadow-orangeBigShadow top-0 right-0 -z-10 animate-pulse"></div>
      <div className="absolute shadow-cyanMediumShadow top"></div>
    </div>
  );
}

export default HeroGradient;
