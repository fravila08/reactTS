import axios from "axios";

export interface PokemonResponse {
  name: string;
  img: string;
  typeUrl: string;
}

export const getPokemonData = async (
  queryParam: number | string
): Promise<PokemonResponse> => {
  try {
    let response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${queryParam}`
    );
    let name: string = response.data.name;
    let img: string = response.data.sprites.front_default;
    let typeUrl: string = response.data.types[0].type.url;
    return { name: name, img: img, typeUrl: typeUrl };
  } catch (err) {
    console.error(err);
    if (typeof queryParam === "number") {
      return getPokemonData(Math.floor(Math.random() * queryParam));
    }
    return getPokemonData("ditto");
  }
};

interface PokemonObj {
  name: string;
  url: string;
}

interface TypePokemon {
  pokemon: PokemonObj;
}

export const getPokemonTeam = async (
  pokemonTypeUrl: string
): Promise<Array<string>> => {
  let response = await axios.get(pokemonTypeUrl);
  let availableMembers: Array<TypePokemon> = response.data.pokemon;
  let teamNames: Array<string> = [];
  for (let i: number = 0; i < 5; i++) {
    let choice: number = Math.floor(Math.random() * availableMembers.length);
    teamNames.push(availableMembers[choice].pokemon.name);
  }
  return teamNames;
};

export interface PokemonCardProps {
  name: string;
  pokemonData: PokemonResponse | null;
}
