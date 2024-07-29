import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ChooseUser from "./pages/ChooseUser";
import { loadApplication } from "./utilities/manageUsers";
import BrowsingPage from "./pages/BrowsingPage";
import FilmDisplay from "./pages/FilmDisplay";
import { getMediaDetails } from "./utilities/api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: loadApplication,
    children: [
      {
        index: true,
        element: <ChooseUser />,
      },
      {
        path: "/browse",
        element: <BrowsingPage />,
      },
      {
        path: "media/:filmType/film/:filmId",
        element: <FilmDisplay />,
        loader: async ({ params }) => {
          const { filmType, filmId } = params;
          if (!filmType || !filmId) {
            throw new Error("Missing parameters: filmType or filmId");
          }
          return await getMediaDetails(filmType, filmId);
        },
      },
    ],
  },
]);

export default router;
