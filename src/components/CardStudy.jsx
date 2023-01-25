import React from "react";

function CardStudy({ study }) {
  return (
    <div className="flex flex-col mb-12 items-center sm:text-left sm:flex-row  gap-1 sm:gap-5 sm:my-4">
      <div className="hover:transition-all flex bg-secondary tex-white justify-center rounded-full p-5 w-16 h-16 sm:-mr-24 z-10">
        {study.year}
      </div>
      <div className="hidden w-20 ml-1 h-0.5  bg-white rotate-90 sm:flex"></div>
      <div className="flex flex-col items-center text-center sm:text-left  sm:items-start">
        <h1 className="font-semibold text-xl">{study.institution}</h1>
        <div className="flex ">
          {study.title}
          {study.state && (
            <p className=" text-secondary mx-2">
              {"("} {study.state} {")"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardStudy;
