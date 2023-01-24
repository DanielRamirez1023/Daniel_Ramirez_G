import React from "react";
import CardProyects from "./CardProyects";

function Proyects() {
  return (
    <section
      className="text-center p-10 bg-secondary_2  text-white"
      id="proyects"
    >
      <h1 className="font-bold text-2xl mb-4  border-b-2 border-secondary w-24 m-auto ">
        Proyects
      </h1>
      <div className="flex flex-row flex-wrap gap-10 justify-center sm:w-8/12 m-auto">
        <CardProyects />
        <CardProyects />
        <CardProyects />
        <CardProyects />
      </div>
    </section>
  );
}

export default Proyects;
