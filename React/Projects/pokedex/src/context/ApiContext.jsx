import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CreatApiContext = createContext();

const ApiContext = (props) => {
  const [ApiData, setApiData] = useState([]);

  const callApiData = async () => {
    try {

    // fetching all types od data using PokeAPI
      const pokemonData = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/pikachu",
      );

      const pokemonSpecies = await axios.get(
        `${pokemonData.data.species.url}`,
      );

      const pokemonEvolution = await axios.get(
        `${pokemonSpecies.data.evolution_chain.url}`,
      );

      setApiData([
        pokemonData.data,
        pokemonSpecies.data,
        pokemonEvolution.data,
      ]);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    callApiData();
  }, []);

  return (
    <CreatApiContext.Provider value={ApiData}>
      {props.children}
    </CreatApiContext.Provider>
  );
};

export default ApiContext;
