import { LuArrowDownRight } from "react-icons/lu";
function NavbarButton() {
  return (
    <div>
      <button className="px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:scale-110 transition-all delay-200 linear hover:border-orange hover:shadow-cyanShadow">
        Hire Me
        <div className="sm:hidden md:block">
          <LuArrowDownRight />
        </div>
      </button>
    </div>
  );
}

export default NavbarButton;
