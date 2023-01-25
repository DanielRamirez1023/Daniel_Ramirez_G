import React from "react";
import Swal from "sweetalert2";

function CardProyects({ proyect }) {
  return (
    <div
      className="proyect flex sm:flex-row items-center justify-center bg-[rgba(0,0,0,0.8)] hover:bg-blend-multiply my-4 sm:m-2 rounded-sm w-80 h-52 bg-cover bg-center  border-secondary  hover:border-x-4  "
      style={{
        backgroundImage: `url(${proyect.UrlImage})`,
      }}
    >
      <div className="text-item  ">
        <h1>{proyect.name}</h1>
        <button
          className="border-2 mt-5  border-secondary px-4 py-1 rounded-lg"
          onClick={() => {
            Swal.fire({
              icon: "info",
              title: "Good day",
              html: "<p>If you want to see this project, contact me <b>danielfelipe23.dr@gmail.com</b></p>",
              background: "#2B3A39",
              color: "white",
              confirmButtonColor: "#38bdf8",
            });
          }}
        >
          View Project
        </button>
      </div>
    </div>
  );
}

export default CardProyects;
