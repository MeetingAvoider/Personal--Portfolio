function HeroText() {
  return (
    <div className="flex flex-col gap-4 justify-center md:text-left sm:center ">
      <h2 className="lg:text-2xl sm:text-2xl uppercase text-cyan">
        Full Stack Web Developer
      </h2>
      <h1 className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange">
        Nitin Kumar
      </h1>
      <p className="text-white text-lg mt-4 ">
        A Passionate Web Developer
        <br />
        with Some Projects Exprience
      </p>
    </div>
  );
}

export default HeroText;
