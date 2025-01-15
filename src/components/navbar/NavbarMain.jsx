import React from "react";
import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";
import NavbarButton from "./NavbarButton";
import { GiHamburgerMenu } from "react-icons/gi";
function NavbarMain() {
  return (
    <nav className=" max-w-[1300px] w-full mx-auto fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2 ">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto  bg-black items-center px-6 py-5 rounded-r-full rounded-l-full border-orange border-[0.7px]">
        <NavbarLogo />
        <NavbarLinks />
        <NavbarButton />
      </div>
      <div className="flex justify-center items-center rounded-full lg:hidden sm:block  ">
        <button>
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
}

export default NavbarMain;
