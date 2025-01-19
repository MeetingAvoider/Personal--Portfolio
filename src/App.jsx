import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/heroMain";
import SubHero from "./components/heroSection/subHeroSection";
function App() {
  return (
    <main className="font-body flex flex-row ">
      <NavbarMain />
      <HeroMain />
      <SubHero />
    </main>
  );
}
export default App;
