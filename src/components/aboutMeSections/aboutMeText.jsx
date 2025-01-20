import React from "react";

function AboutMeText() {
  return (
    <div className="flex flex-col md:text-left sm:text-center md:items-start sm:items-center ">
      <h2 className="text-6xl text-cyan mb-10 ">About Me</h2>
      <p className="text-white text-2xl ">
        I’m Nitin, a web developer with a passion for building application and
        coding. I specialize in React and front-end development,and build
        real-world projects and modern web technologies. Outside of coding, I
        enjoy continuous learning and sharing knowledge to inspire others to
        achieve their goals.
      </p>
      <button className="text-white text-xl font-extrabold border border-orange rounded-full px-10 py-4 my-3 bg-black md:self-start sm:self-center hover:text-cyan hover:bg-orange hover:border-cyan transition-all duration-1000 ease-in-out cursor-pointer ">
        My Projects
      </button>
    </div>
  );
}

export default AboutMeText;
