import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import imagen from "../images/avatar.jpeg";

function Card() {
  return (
    <div className="card flex justify-center flex-col  mt-8 sm:mt-5">
      <div className="card-head z-10">
        <img
          className=" rounded-full border-8  border-secondary p-3"
          src={imagen}
          alt="imagen"
        />
      </div>
      <div className="card-body   text-center text-white mt-4">
        <h1 className="text-2xl font-bold ">Daniel Ramirez </h1>
        <p>frontend developer</p>
        <div className="flex flex-row gap-5 justify-center mt-3 mb-8 sm:mb-0">
          <FaFacebook />
          <FaLinkedin />
          <FaTwitter />
          <FaGithub />
        </div>
      </div>
    </div>
  );
}

export default Card;
