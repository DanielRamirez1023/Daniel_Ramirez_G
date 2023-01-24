import React from "react";
import BarProgress from "./BarProgress";

function Skills() {
  return (
    <section
      className="text-center p-10 bg-secondary_2  text-white"
      id="skills"
    >
      <h1 className="font-bold text-2xl mb-4  border-b-2 border-secondary w-20 m-auto ">
        {" "}
        Skills
      </h1>

      <div className="flex flex-col  sm:flex-row  justify-evenly  mt-10">
        <div>
          <BarProgress percentage={"80%"} text={"HTML"} />
          <BarProgress percentage={"72%"} text={"CSS"} />
          <BarProgress percentage={"75%"} text={"JavaScript"} />
          <BarProgress percentage={"50%"} text={"React"} />
          <BarProgress percentage={"60%"} text={"Tailwind"} />
          <BarProgress percentage={"40%"} text={"Wordpress"} />
        </div>
        <div>
          <BarProgress percentage={"80%"} text={"Java"} />
          <BarProgress percentage={"64%"} text={"SQL"} />
          <BarProgress percentage={"82%"} text={"GitHub"} />
          <BarProgress percentage={"85%"} text={"Boostrap"} />
          <BarProgress percentage={"70%"} text={"Firestore"} />
          <BarProgress percentage={"65%"} text={"Mongo DB"} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
