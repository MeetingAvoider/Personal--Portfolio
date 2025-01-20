import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/heroMain";
import AboutMeMain from "./components/aboutMeSections/aboutMeMain";
import HelperSection from "./components/helperSection/helper";

function App() {
  return (
    <main className="font-body flex flex-col ">
      <NavbarMain />
      <HeroMain />
      <AboutMeMain />
      <HelperSection />
    </main>
  );
}
export default App;
