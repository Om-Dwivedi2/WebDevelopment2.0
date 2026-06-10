import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { pokemonData } from "../Api/PokemonApi";
export const CreatePokemonContext = createContext();

const PokemonContext = (props) => {
  const [pokemonName, setPokemonName] = useState("");

  const [data, setData] = useState([]);

  async function fetchData() {
    // if name is empty return
    if (!pokemonName) return;

    const response = await pokemonData(pokemonName);
    setData([ ...data , response]);
  }

  useEffect(() => {
    fetchData();
  }, [pokemonName]);

  return (
    <CreatePokemonContext.Provider value={[setPokemonName, data]}>
      {props.children}
    </CreatePokemonContext.Provider>
  );
};

export default PokemonContext;
