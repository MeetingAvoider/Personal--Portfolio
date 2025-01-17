function NavbarLinks() {
  const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skill" },
    { link: "Exprience", section: "exprience" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
  ];
  return (
    <ul className="flex lg:flex-row xsm:flex-col gap-6 text-white font-body lg:relative xsm:absolute xsm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md xsm:text-xl xsm:bg-cyan/30 backdrop-blur-lg lg:bg-black xsm:w-full py-4">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <a
              href="#"
              className="cursor-pointer text-white font-bold  hover:text-cyan  transition-all delay-500 "
            >
              {link.link}
            </a>
            <div className="w-0 mx-auto bg-cyan group-hover:w-full transition-all delay-500 ease-in-out h-[1px] "></div>
          </li>
        );
      })}
    </ul>
  );
}

export default NavbarLinks;
