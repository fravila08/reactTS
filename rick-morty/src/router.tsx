import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import HomePage from "./pages/HomePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import CharactersPage from "./pages/CharactersPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import {
  filterCharacters,
  getACharacter,
  getCharacters,
} from "./utilities.tsx";
import ACharacterPage from "./pages/ACharacterPage.tsx";
import FavoritesPage from "./pages/FavoritesPage.tsx";
import ResultsPage from "./pages/ResultsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about/",
        element: <AboutPage />,
      },
      {
        path: "/characters/",
        element: <CharactersPage />,
        loader: getCharacters,
      },
      {
        path: "/acharacter/:id/",
        element: <ACharacterPage />,
        loader: getACharacter,
      },
      {
        path: "/favorites/",
        element: <FavoritesPage />,
      },
      {
        path: "/results/:searchInput/",
        element: <ResultsPage />,
        loader: filterCharacters,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
