import { LoaderFunctionArgs } from "react-router-dom";
import {
  RickAndMortyAPIResp,
  GetCharactersI,
  CharacterInterface,
} from "./interfaces";
import axios from "axios";

export const getCharacters =
  async ({}: LoaderFunctionArgs): Promise<GetCharactersI> => {
    let response = await axios.get("https://rickandmortyapi.com/api/character");
    let data: RickAndMortyAPIResp = response.data;
    let formatData: GetCharactersI = {
      next: data.info.next,
      prev: data.info.prev,
      results: data.results,
    };
    return formatData;
  };

export const filterCharacters = async ({
  request,
  params,
}: LoaderFunctionArgs): Promise<Array<CharacterInterface>> => {
  request.signal;
  let response = await axios.get(
    `https://rickandmortyapi.com/api/character/?name=${params.searchInput}`
  );
  let data: RickAndMortyAPIResp = response.data;
  return data.results;
};

export const getACharacter = async ({
  request,
  params,
}: LoaderFunctionArgs): Promise<CharacterInterface> => {
  request.signal;
  let response = await axios.get(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  let data: CharacterInterface = response.data;
  return data;
};

export const isFavorite = (
  favorites: Array<CharacterInterface>,
  char: CharacterInterface
): boolean => {
  return Boolean(
    favorites.filter((characters) => characters.id === char.id).length
  );
};

export const addToFavoites = (
  favorites: Array<CharacterInterface>,
  char: CharacterInterface
): Array<CharacterInterface> => {
  return [...favorites, char];
};

export const removeFromFavorites = (
  favorites: Array<CharacterInterface>,
  char: CharacterInterface
): Array<CharacterInterface> => {
  return favorites.filter((character) => character.id !== char.id);
};
