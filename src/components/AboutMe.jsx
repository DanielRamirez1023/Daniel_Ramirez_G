import React from "react";
import { GiSoccerBall } from "react-icons/gi";
import { SiYourtraveldottv } from "react-icons/si";
import { HiVideoCamera } from "react-icons/hi";
import {
  IoIosMusicalNotes,
  IoLogoGameControllerB,
  IoLogoModelS,
  IoMdBicycle,
} from "react-icons/io";
import { MdMenuBook } from "react-icons/md";

function AboutMe() {
  return (
    <section className="flex  flex-col items-center pt-10  text-white sm:p-16 bg-primary ">
      <h1 className="font-bold text-2xl "> About Me</h1>
      <p className=" w-3/4 my-7 text-center sm:text-left">
        I am an eighth semester computer engineering student, prepared to use my
        skills and passion for technology to promote the mission of a company, a
        fan of software development and all its fields, wanting to boost my
        skills and thus challenge myself as a professional, punctual , honest,
        self-taught, disciplined and with a high ease of learning.
      </p>

      <div className="flex flex-col sm:flex-row sm:justify-between  w-3/4">
        <div className="text-left ">
          <h1 className="font-semibold text-xl text-center sm:text-left sm:my-3 mt-5">
            Personal Details
          </h1>
          <div className="my-3">
            <span className="text-secondary">Age:</span> 22 years old
          </div>
          <div>
            <span className="text-secondary">Email:</span>{" "}
            danielfelipe23.dr@gmail.com
          </div>
          <div className="my-3">
            <span className="text-secondary ">Phone:</span> 3015894301
          </div>
          <div>
            <span className="text-secondary ">residence:</span>{" "}
            Medellin-Colombia
          </div>
        </div>
        <div className=" w-full sm:w-2/5 sm:my-0 my-8">
          <h1 className="font-semibold text-xl mt-2 mb-3">my Hobbies</h1>
          <div className="flex gap-2 sm:gap-4 flex-wrap">
            <div className="bg-gray-800 p-2 rounded-sm text-center">
              <GiSoccerBall className="text-2xl mx-auto" />
              <p>Soccer</p>
            </div>
            <div className="bg-gray-800 p-2 rounded-sm text-center">
              <SiYourtraveldottv className="text-2xl mx-auto" />
              <p>Travel</p>
            </div>
            <div className="bg-gray-800  p-2 rounded-sm text-center">
              <HiVideoCamera className="text-2xl mx-auto " />
              <p>Films</p>
            </div>
            <div className="bg-gray-800 p-2 rounded-sm text-center">
              <IoIosMusicalNotes className="text-2xl mx-auto" />
              <p>Music</p>
            </div>
            <div className="bg-gray-800 p-2 rounded-sm text-center">
              <IoLogoGameControllerB className="text-2xl mx-auto" />
              <p>Games</p>
            </div>
            <div className="bg-gray-800 p-2 px-3 rounded-sm text-center">
              <IoLogoModelS className="text-2xl mx-auto" />
              <p>Cars</p>
            </div>
            <div className="bg-gray-800 p-2 px-3 rounded-sm text-center">
              <IoMdBicycle className="text-2xl mx-auto" />
              <p>Cicle</p>
            </div>
            <div className="bg-gray-800 p-2 rounded-sm text-center">
              <MdMenuBook className="text-2xl mx-auto" />
              <p>Learn</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
