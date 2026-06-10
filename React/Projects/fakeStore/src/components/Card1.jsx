import React from "react";
import { FaStar } from "react-icons/fa6";

const Card1 = (props) => {
  console.log(props.data);
  
  return (
    <>
      <div className=" rounded flex flex-col gap-2 p-3 shadow bg-white h-fit">
        <section className="h-50">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
            alt=""
            className="w-fit h-full mx-auto"
          />
        </section>
        <section className="font-semibold text-sm ">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </section>
        <section className="flex items-center gap-1 text-sm text-yellow-300">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <div className="text-black ">3.9 </div>
          <div className="text-orange-400">(120 review)</div>
        </section>
        <section className="text-xs text-gray-500">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </section>

        <section className="text-lg text-black font-semibold">$12,000</section>
      </div>
    </>
  );
};

export default Card1;
