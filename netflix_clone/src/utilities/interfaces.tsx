import { SetStateAction, Dispatch } from "react";

export interface AuthenticationI {
  success: boolean;
  status_code: number;
  status_message: string;
}

export interface GuestSessionI {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
}

export interface GuestUserI {
  name: string;
  session_id: string;
}

export interface MovieDetailsI {
  backdrop_path: string;
  poster_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  media_type: string;
  adult: boolean;
  genre_ids: Array<number>;
}

export interface TrendingMoviesResponseI {
  page: number;
  results: Array<MovieDetailsI>;
}

export interface NewUserModalPropsI {
  show: boolean;
  onHide: Dispatch<SetStateAction<boolean>>;
  users: Array<GuestUserI>;
  setUsers: Dispatch<SetStateAction<Array<GuestUserI>>>;
}

export interface ProfileCardI {
  name: string;
  img_src: string;
  users: Array<GuestUserI>;
  setUsers: Dispatch<SetStateAction<Array<GuestUserI>>>;
  setSelectedGuest: Dispatch<SetStateAction<GuestUserI>>;
}

export interface ConfirmDeleteModalI {
  show: boolean;
  onHide: Dispatch<SetStateAction<boolean>>;
  name: string;
  users: Array<GuestUserI>;
  setUsers: Dispatch<SetStateAction<Array<GuestUserI>>>;
}

export interface ContextI {
  users: Array<GuestUserI>;
  setUsers: Dispatch<SetStateAction<Array<GuestUserI>>>;
  selectedGuest: GuestUserI;
  setSelectedGuest: Dispatch<SetStateAction<GuestUserI>>;
  selectedTab: string;
}

export interface NavBarPropsI {
  setSelectedTab: Dispatch<SetStateAction<string>>;
}
export interface CategoryMediaPropsI {
  category: string;
}

export interface TrendingMediaPropsI {
  media: string;
}

export interface RowDisplayPropsI {
  movies: Array<MovieDetailsI>;
  header: string;
}

export interface HomeDisplayPropsI {
  media: string;
}

export interface GenresI {
  id: number;
  name: string;
}

export interface CategoryMediaPropsI {
  id: number;
  name: string;
  mediaType: string;
}

export interface ProductionCompanyI {
  id: number;
  logo_path: string;
  name: string;
}

export interface FilmDetailsI {
  backdrop_path: string;
  budget: number;
  homepage: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<ProductionCompanyI>;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  vote_average: number;
  vote_count: number;
}

export interface SeasonDetailsI {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
}

export interface EpisodeDetailsI {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
}

export interface NetworkI {
  id: number;
  logo_path: string;
  name: string;
}

export interface SeriesDetailsI {
  backdrop_path: string;
  first_air_date: string;
  homepage: string;
  id: number;
  in_production: boolean;
  last_air_date: string;
  next_episode_to_air: EpisodeDetailsI;
  name: string;
  last_episode_to_air: EpisodeDetailsI;
  networks: Array<NetworkI>;
  number_of_episodes: number;
  number_of_seasons: number;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<ProductionCompanyI>;
  status: string;
  type: string;
  vote_average: number;
  vote_count: number;
  seasons: Array<SeasonDetailsI>;
}

export interface NavItemI {
  label: string;
  mediaType: string;
}
