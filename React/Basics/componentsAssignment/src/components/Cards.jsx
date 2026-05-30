import React from "react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";

const Cards = () => {
  return (
    <div className="row">
      <div className="col-4 g-3 card bg-black overflow-hidden" style="border-radius: 20px">
        <img className="object-fit-cover w-100 h-100" src={card1} alt="" />
      </div>
      <div className="col-4 g-3 card bg-black overflow-hidden" style="border-radius: 20px">
        <img className="object-fit-cover w-100 h-100" src={card2} alt="" />
      </div>
      <div className="col-4 g-3 card bg-black overflow-hidden" style="border-radius: 20px">
        <img className="object-fit-cover w-100 h-100" src={card3} alt="" />
      </div>
      
    </div>
  );
};

export default Cards;
