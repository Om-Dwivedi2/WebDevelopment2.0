import React, { useContext, useState } from "react";
import BaseStats from "./BaseStats";
import Evolution from "./Evolution";
import About from "./About";
import { CreatApiContext } from "../context/ApiContext";

const Card = (props) => {
  const apiData = useContext(CreatApiContext);
console.log(apiData[0].name);

  const buttonList = [
    { name: "About", component: About },
    { name: "BaseStats", component: BaseStats },
    { name: "Evolution", component: Evolution },
  ];
  const [active, setActive] = useState("About");

  console.log(props.data.types);

  return (
    <div className="w-96 overflow-hidden rounded-3xl bg-teal-400 shadow-lg">
      {/* Top */}
      <div className="relative px-6 pt-5 pb-20 text-white">
        <div className="flex justify-between">
          <div>
            <h2 className="text-3xl font-bold capitalize">{apiData[0].name}</h2>

            <div className="mt-2 flex gap-2">
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm">
                {apiData[0].types[0].type.name}
              </span>
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm">
                {apiData[0].types.length < 2
                  ? ""
                  : apiData[0].types[1].type.name}
              </span>
            </div>
          </div>

          <span className="text-sm font-semibold">
            #{apiData[0].id.toString().padStart(3, "0")}
          </span>
        </div>

        <img
          src={apiData[0].sprites.other["official-artwork"].front_default}
          alt="Bulbasaur"
          className="absolute left-1/2 bottom-0 w-40 -translate-x-1/2 translate-y-1/2"
        />
      </div>

      {/* Bottom */}
      <div className="rounded-t-3xl bg-white px-6 pt-20 pb-6">
        <div className="mb-5 flex gap-6 text-sm">
          <button
            value={"About"}
            style={
              active == "About"
                ? { borderBottom: "2px solid black" }
                : { borderBottom: "none", color: "#9ca3af" }
            }
            onClick={(e) => {
              setActive(e.target.value);
            }}
            className=" pb-3 font-medium"
          >
            About
          </button>
          <button
            value={"BaseStats"}
            style={
              active == "BaseStats"
                ? { borderBottom: "2px solid black" }
                : { borderBottom: "none", color: "#9ca3af" }
            }
            onClick={(e) => {
              setActive(e.target.value);
            }}
            className="pb-3 "
          >
            Base Stats
          </button>
          <button
            value={"Evolution"}
            style={
              active == "Evolution"
                ? { borderBottom: "2px solid black" }
                : { borderBottom: "none", color: "#9ca3af" }
            }
            onClick={(e) => {
              setActive(e.target.value);
            }}
            className="pb-3 "
          >
            Evolution
          </button>
          <button
            value={"moves"}
            style={
              active == "moves"
                ? { borderBottom: "2px solid black" }
                : { borderBottom: "none", color: "#9ca3af" }
            }
            onClick={(e) => {
              setActive(e.target.value);
            }}
            className="pb-3 "
          >
            Moves
          </button>
        </div>

        {buttonList.map((Element, inx) => {
          if (Element.name == active) {
            return <Element.component key={inx} data={props.data} />;
          }
        })}
      </div>
    </div>
  );
};

export default Card;
