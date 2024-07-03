import { SetStateAction, Dispatch } from "react";

interface Info {
  next: string | null;
  prev: string | null;
}

interface Origin {
  name: string;
  url: string;
}

export interface CharacterInterface {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: Origin;
  image: string;
}

export interface CharacterCardProps {
  favorites: Array<CharacterInterface>;
  setFavorites: Dispatch<SetStateAction<Array<CharacterInterface>>>;
  character: CharacterInterface;
}

export interface FavoritesContext {
  favorites: Array<CharacterInterface>;
  setFavorites: Dispatch<SetStateAction<Array<CharacterInterface>>>;
}

export interface RickAndMortyAPIResp {
  info: Info;
  results: Array<CharacterInterface>;
}

export interface GetCharactersI {
  next: string | null;
  prev: string | null;
  results: Array<CharacterInterface>;
}

export interface FilteredCharactersI {
  filteredCharacters: Array<CharacterInterface>;
}
