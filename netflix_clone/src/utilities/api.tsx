import axios, { AxiosInstance } from "axios";
import {
  AuthenticationI,
  FilmDetailsI,
  GenresI,
  GuestSessionI,
  MovieDetailsI,
  SeriesDetailsI,
  TrendingMoviesResponseI,
} from "./interfaces";

const tmdb_key = import.meta.env.VITE_TMDB_KEY;

const api: AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${tmdb_key}`,
  },
});

export const authenticateMyAccount = async (): Promise<boolean> => {
  let response = await api.get("authentication");
  let data: AuthenticationI = response.data;
  return data.success;
};

export const createGuestSession = async (): Promise<string> => {
  try {
    let response = await api.get("authentication/guest_session/new");
    let data: GuestSessionI = response.data;
    return data.guest_session_id;
  } catch (err) {
    console.error(err);
    return "";
  }
};

export const getGenres = async (media: string): Promise<Array<GenresI>> => {
  let response = await api.get(`genre/${media}/list?language=en`);
  let data: Array<GenresI> = response.data.genres;
  return data;
};

export const getTrendingMedia = async (
  media: string
): Promise<Array<MovieDetailsI>> => {
  let response = await api.get(`trending/${media}/day?language=en-US`);
  let data: TrendingMoviesResponseI = response.data;
  return data.results;
};

export const getMediaByGenre = async (
  media: string,
  genre_id: number
): Promise<Array<MovieDetailsI>> => {
  const response = await api.get(`discover/${media}?with_genres=${genre_id}`);
  let data: TrendingMoviesResponseI = response.data;
  return data.results;
};

export const getMediaDetails = async (
  media: string,
  id: string
): Promise<SeriesDetailsI | FilmDetailsI> => {
  const response = await api.get(`${media}/${id}`);
  if (media === "tv") {
    let data: SeriesDetailsI = response.data;
    return data;
  } else {
    let data: FilmDetailsI = response.data;
    return data;
  }
};
