import React from "react";
import CardProyects from "./CardProyects";
import SinergiaEducativa from "../images/sinergiaEducativa.png";
import WikiTics from "../images/wikitics.jpeg";
import EqsDotaciones from "../images/EQSdotaciones.png";
import ApiGitHub from "../images/ApiGithub.png";
function Proyects() {
  const proyects = [
    {
      UrlImage: SinergiaEducativa,
      name: "Sinergia Educativa",
      description: "",
    },
    {
      UrlImage: WikiTics,
      name: "WikiTics",
      description: "",
    },
    {
      UrlImage: EqsDotaciones,
      name: "Eqs Dotaciones",
      description: "",
    },
    {
      UrlImage: ApiGitHub,
      name: "Api GitHub",
      description: "",
    },
  ];
  return (
    <section
      className="text-center p-10 bg-secondary_2  text-white"
      id="proyects"
    >
      <h1 className="font-bold text-2xl mb-4  border-b-2 border-secondary w-24 m-auto ">
        Proyects
      </h1>
      <div className="flex flex-row flex-wrap gap-1 justify-center sm:w-8/12 m-auto">
        {proyects.map((item, index) => (
          <CardProyects key={index} proyect={item} />
        ))}
      </div>
    </section>
  );
}

export default Proyects;
