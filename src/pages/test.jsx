import React from "react";
import { useState } from "react";
const Circle = ({ width, height }) => {
  console.log(width, height);
  return (
    <div
      className={`rounded-[50%] w-${width} h-${height} border-2  m-5 bg-transparent border-black `}
    ></div>
  );
};

const Test = () => {
  const [circleDimention, setCircleDimention] = useState({
    width: "20",
    height: "20",
  });
  return (
    <div className="flex justify-center items-center">
      <Circle width="40" height="40"/>
    </div>
  );
};

export default Test;
