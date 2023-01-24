import React from "react";
import CardStudy from "./CardStudy";

function Studies() {
  const studies = [
    {
      institution: "Institucion Educativa Monseñor victor Wiedeman",
      title: "Bachiller academico",
      year: "2017",
    },
    {
      institution: "Politecnico Colombiano Jaime Isaza Cadavid",
      title: "Ingenieria Informatica",
      year: "2018",
      state: "Presente",
    },
    {
      institution: "Servicio de aprendizaje SENA",
      title: "Arquitectura de computadores",
      year: "2020",
    },
    {
      institution: "IME escuelas tecnicas",
      title: "Desarrollador FullStack junior",
      year: "2022",
    },
    {
      institution: "Politecnico Andino Iberoamericano",
      title: "Desarrollador Frontend",
      year: "2022",
    },
  ];
  return (
    <section
      className="flex flex-col  items-center  p-10 bg-primary text-white"
      id="studies"
    >
      <h1 className="font-bold text-2xl mb-7  border-b-2 border-secondary w-20 m-auto ">
        Studies
      </h1>
      <div>
        {studies.map((item, index) => (
          <CardStudy key={index} study={item} />
        ))}
      </div>
    </section>
  );
}

export default Studies;
