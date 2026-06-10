import axios from "axios";

export const pokemonData = async (pokemon) => {
  try {
    const pokemonResponse = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
    );

    const speciesResponse = await axios.get(
      `${pokemonResponse.data.species.url}`,
    );

    const evolutionResponse = await axios.get(
      `${speciesResponse.data.evolution_chain.url}`,
    );

    return {
      PokemonName: pokemon,
      PokemonGeneralData: pokemonResponse.data,
      SpeciesData: speciesResponse.data,
      EvolutionData: evolutionResponse.data,
    };
  } catch (error) {
    console.log(error.message);
  }
};
