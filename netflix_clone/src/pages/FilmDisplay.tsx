import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { SeriesDetailsI, FilmDetailsI } from "../utilities/interfaces";

const FilmDisplay: React.FC = () => {
  const loaderData = useLoaderData();
  const [mediaDetails, setMediaDetails] = useState<
    SeriesDetailsI | FilmDetailsI | null
  >(null);
  const [isTv, setIsTv] = useState<boolean>(false);

  const isTvType = (data: any): data is SeriesDetailsI => {
    setIsTv(true);
    return (data as SeriesDetailsI).last_air_date !== undefined;
  };
  const isMovieDetails = (data: any): data is FilmDetailsI => {
    setIsTv(false);
    return (data as FilmDetailsI).release_date !== undefined;
  };

  useEffect(() => {
    if (isTvType(loaderData)) {
      setMediaDetails(loaderData);
    }
    if (isMovieDetails(loaderData)) {
      setMediaDetails(loaderData);
    }
  }, []);

  return (
    <>
      {mediaDetails ? (
        <div id="details-display"
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${mediaDetails.backdrop_path}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
          <div id="details-menu">
            <p>{mediaDetails.overview}</p>
          </div>
          </div>
      ) : null}
    </>
  );
};

export default FilmDisplay;
