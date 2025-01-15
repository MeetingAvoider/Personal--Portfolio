function NavbarLinks() {
  const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skill" },
    { link: "Exprience", section: "exprience" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
  ];
  return (
    <ul className="flex items-center gap-4">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <a
              href="#"
              className="cursor-pointer text-white font-bold hover:text-cyan transition-all delay-500 "
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
