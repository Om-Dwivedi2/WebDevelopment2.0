import React from "react";

const Evolution = () => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-8">Evolution Chain</h2>

     
      <div className="flex items-center justify-between mb-10">
        <div className="text-center">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur" className="w-24 h-24" />
          <p>Bulbasaur</p>
        </div>

        <div className="text-center">
          <p className="text-gray-400 text-2xl">→</p>
          <p>Lvl 16</p>
        </div>

        <div className="text-center">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" alt="Ivysaur" className="w-24 h-24" />
          <p>Ivysaur</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-center">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" alt="Ivysaur" className="w-24 h-24" />
          <p>Ivysaur</p>
        </div>

        <div className="text-center">
          <p className="text-gray-400 text-2xl">→</p>
          <p>Lvl 34</p>
        </div>

        <div className="text-center">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png" alt="Venusaur" className="w-24 h-24" />
          <p>Venusaur</p>
        </div>
      </div>
    </div>
  );
};

export default Evolution;
