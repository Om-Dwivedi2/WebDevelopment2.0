import React, { useContext, useState } from "react";
import { CreatePokemonContext } from "../context/PokemonContext";
import Card from "./Card";

const Home = () => {
  const [name, setName] = useState("");

  const [setPokemonName, data] = useContext(CreatePokemonContext);

  async function search(e) {
    e.preventDefault();

    setPokemonName(name.toLowerCase());

    setName("");
  }

  function clear(e) {
    e.preventDefault();
    setName("");
  }

  return (
    <>
      <main className="flex flex-col items-center  justify-center mt-20 gap-20 bg-gray-200 py-20 mx-auto rounded-2xl w-[80%]">
        <form className="flex items-center justify-center  gap-5 w-full px-5">
          <input
            className="bg-white rounded px-3 py-2 border-2 w-[50%]"
            type="text"
            name="pokeName"
            placeholder="Enter pokemon Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <div className="flex items-center gap-5">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded text-xl active:scale-95"
              onClick={(e) => {
                search(e);
              }}
            >
              Search
            </button>
            <button
              type="reset"
              className="bg-red-500 text-white py-2 px-4 rounded text-xl active:scale-95"
              onClick={(e) => {
                clear();
              }}
            >
              Clear
            </button>
          </div>
        </form>

        <section className="w-full px-15 flex items-center gap-5 flex-wrap">
          {data.map((e, inx) => {
            return <Card key={inx} data={e}/>;
          })}
        </section>
      </main>
    </>
  );
};

export default Home;
