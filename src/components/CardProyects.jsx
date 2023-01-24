import React from "react";
import imagen from "../images/wikitics.jpeg";
function CardProyects() {
  return (
    <div
      className="flex sm:flex-row items-center justify-center bg-[rgba(0,0,0,0.6)] hover:bg-blend-multiply sm:m-3 rounded-sm w-80 h-52 bg-cover bg-center  hover:shadow-xl  hover:shadow-blue-300 hover:cursor-pointer"
      style={{
        backgroundImage: `url(${imagen})`,
      }}
    >
      <h1 className="hidden hover:flex">WikiTiks</h1>
    </div>
  );
}

export default CardProyects;
