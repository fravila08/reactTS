import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PokemonTeam from "./projects/react-pokemon/PokemonTeam";
import GuessNumber from "./projects/guessNumber/guessNumber";
import Home from "./Home";
import RickAndMorty from "./projects/rick-morty/RickAndMorty";
import HomePage from "./projects/rick-morty/pages/HomePage.tsx";
import AboutPage from "./projects/rick-morty/pages/AboutPage.tsx";
import CharactersPage from "./projects/rick-morty/pages/CharactersPage.tsx";
import ErrorPage from "./projects/rick-morty/pages/ErrorPage.tsx";
import NotFoundPage from "./projects/rick-morty/pages/NotFoundPage.tsx";
import {
  filterCharacters,
  getACharacter,
  getCharacters,
} from "./projects/rick-morty/utilities.tsx";
import ACharacterPage from "./projects/rick-morty/pages/ACharacterPage.tsx";
import FavoritesPage from "./projects/rick-morty/pages/FavoritesPage.tsx";
import ResultsPage from "./projects/rick-morty/pages/ResultsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/guessANumber/",
        element: <GuessNumber />,
      },
      {
        path: "/pokemon/",
        element: <PokemonTeam />,
      },
      {
        path: "/rickAndMorty/",
        element: <RickAndMorty />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "/rickAndMorty/about/",
            element: <AboutPage />,
          },
          {
            path: "/rickAndMorty/characters/",
            element: <CharactersPage />,
            loader: getCharacters,
          },
          {
            path: "/rickAndMorty/acharacter/:id/",
            element: <ACharacterPage />,
            loader: getACharacter,
          },
          {
            path: "/rickAndMorty/favorites/",
            element: <FavoritesPage />,
          },
          {
            path: "/rickAndMorty/results/:searchInput/",
            element: <ResultsPage />,
            loader: filterCharacters,
          },
          {
            path: "/rickAndMorty/*",
            element: <NotFoundPage />,
          },
        ],
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
