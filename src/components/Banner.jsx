import React from "react";
import Card from "./Card";
import banner from "../images/banner.jpg";
function Banner() {
  return (
    <section
      className="flex justify-center bg-[rgba(0,0,0,0.8)] bg-blend-multiply pt-12   sm:pt-24 sm:pb-20 bg-no-repeat bg-center bg-cover bg-origin-content"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <Card />
    </section>
  );
}

export default Banner;
