import HeroText from "./heroText";
import HeroPic from "./heroPic";
import HeroGradient from "./heroGradient";
function HeroMain() {
  return (
    <div className="pt-40 pb-16 ">
      <div className="flex flex-col w-full md:flex-row max-w-[1200px] mx-auto justify-between items-center px-4 relative">
        <HeroText />
        <HeroPic />
        <HeroGradient />
      </div>
    </div>
  );
}

export default HeroMain;
