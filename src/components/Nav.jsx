import React, { useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  const [state, setState] = useState("hidden");
  return (
    <nav className="flex text-white px-7 top-0 justify-between bg-primary sm:flex sm:px-0 sm:justify-around py-7  mb-36 fixed w-full z-50 flex-wrap">
      <div className="logo flex gap-2 text-secondary text-center ">
        <FaLaptopCode className="text-2xl" />
        <h3 className="font-bold tracking-wide">Daniel</h3>
      </div>
      <div className="icon-movil  sm:hidden">
        <GiHamburgerMenu
          className="text-2xl"
          onClick={() => {
            state === "hidden" ? setState("") : setState("hidden");
          }}
        />
      </div>
      <div
        className={`list-items ${state}  text-center  sm:flex  w-full sm:w-auto sm:mt-0 mt-5`}
      >
        <ul className="sm:flex sm:gap-6 ">
          <li className="border-b-2 border-primary hover:border-b-2 hover:border-secondary cursor-pointer">
            <a href="#home"> HOME</a>
          </li>
          <li className="border-b-2 border-primary hover:border-b-2 hover:border-secondary  cursor-pointer">
            <a href="#aboutme">ABOUT</a>
          </li>
          <li className="border-b-2 border-primary hover:border-b-2 hover:border-secondary  cursor-pointer">
            <a href="#skills"> SKILLS</a>
          </li>
          <li className="border-b-2 border-primary hover:border-b-2 hover:border-secondary  cursor-pointer">
            <a href="#studies">STUDIES</a>
          </li>

          <li className="border-b-2 border-primary  hover:border-b-2 hover:border-secondary  cursor-pointer">
            PROYECTS
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
