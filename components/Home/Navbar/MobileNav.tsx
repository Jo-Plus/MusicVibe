import { navLinks } from "@/constant/constant";
import { IoCloseCircleSharp } from "react-icons/io5";
import Link from "next/link";
import React from "react";

type props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}
      >
        <div
          className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-pink-600 space-y-6 z-[1050] `}
        >
          {navLinks.map((link) => {
            return (
              <Link key={link.id} href={link.url} onClick={closeNav}>
                <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                  {link.label}
                </p>
              </Link>
            );
          })}

          <IoCloseCircleSharp
            onClick={closeNav}
            className=" cursor-pointer absolute top-[0.7rem] right-[1.4rem] sm:h-8 w-6 h-6 text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
