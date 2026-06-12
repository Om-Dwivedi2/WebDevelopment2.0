import React from "react";
import Loading from "../assets/Loading.gif";

const Loading = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <img src={Loading} alt="" className="w-50" />
      </div>
    </>
  );
};

export default Loading;
