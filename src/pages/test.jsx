import React from "react";
const Circle = ({ width, height }) => {
  return (
    <div
      className={`rounded-[50%] w-${width} h-${height} border-2  m-5 bg-transparent border-black `}
    ></div>
  );
};

const Test = () => {

   
  return (
    <div className="flex justify-center items-center">
      <Circle width="40" height="40"/>
    </div>
  );
};

export default Test;
