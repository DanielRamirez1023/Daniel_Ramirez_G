import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
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
          <a
            href="https://www.facebook.com/danielramirez23.dr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:text-secondary" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-ramirez-13175a221/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-secondary" />
          </a>
          <a
            href="https://www.instagram.com/daniel_ramirez1023/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-secondary" />
          </a>
          <a
            href="https://github.com/DanielRamirez1023"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-secondary" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
