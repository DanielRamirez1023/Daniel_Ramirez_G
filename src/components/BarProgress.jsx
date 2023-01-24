import React from "react";

function BarProgress({ percentage, text }) {
  return (
    <>
      <h1 className="text-left ml-3">{text}</h1>
      <div className="bg-gray-400 rounded-xl sm:w-96 h-5 mb-5 ">
        <div
          className={`bg-secondary rounded-xl text-center text-sm items-center  h-5`}
          style={{ width: percentage }}
        >
          {percentage}
        </div>
      </div>
    </>
  );
}

export default BarProgress;
