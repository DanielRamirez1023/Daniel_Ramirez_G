import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  return (
    <nav className="flex text-white px-1 top-0 bg-primary sm:flex sm:px-0 justify-around py-7 mb-36 fixed w-full z-50">
      <div className="logo flex gap-2 text-secondary text-center">
        <FaLaptopCode className="text-2xl" />
        <h3 className="font-bold tracking-wide">Daniel</h3>
      </div>
      <div className="icon-movil  sm:hidden ">
        <GiHamburgerMenu />
      </div>
      <div className="list-items hidden  text-center  sm:flex">
        <ul className="sm:flex gap-6 ">
          <li className="border-b-2 border-primary hover:border-b-2 hover:border-secondary cursor-pointer">
            Home
          </li>
          <li className="border-b-2 border-primary hover:border-b-2 hover:border-secondary  cursor-pointer">
            About
          </li>
          <li className="border-b-2 border-primary hover:border-b-2 hover:border-secondary  cursor-pointer">
            Skills
          </li>
          <li className="border-b-2 border-primary hover:border-b-2 hover:border-secondary  cursor-pointer">
            Studies
          </li>
          <li className="border-b-2 border-primary hover:border-b-2 hover:border-secondary  cursor-pointer">
            work experience
          </li>
          <li className="border-b-2 border-primary  hover:border-b-2 hover:border-secondary  cursor-pointer">
            Proyects
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
