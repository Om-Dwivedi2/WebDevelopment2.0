import React from "react";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Card1 = (props) => {
  const navigate = useNavigate();
  console.log(props.id);
  
  return (
    <>
      <div
        className=" rounded flex flex-col gap-2 p-3 shadow bg-white h-fit"
        onClick={() => {
          console.log(navigate(`productDetails:${props.id}`));
        }}
      >
        <section className="h-50">
          <img src={props.data.image} alt="" className="w-fit h-full mx-auto" />
        </section>
        <section className="font-semibold text-sm ">{props.data.title}</section>
        <section className="flex items-center gap-1 text-sm text-yellow-300">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <div className="text-black ">{props.data.rating.rate} </div>
          <div className="text-orange-400">
            ({props.data.rating.count} review)
          </div>
        </section>
        <section className="text-xs text-gray-500">
          {props.data.description.split(" ").slice(0, 10).join(" ") + "..."}
        </section>

        <section className="text-lg text-black font-semibold">
          ${props.data.price}
        </section>
      </div>
    </>
  );
};

export default Card1;
