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
        <div
          id="details-display"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${mediaDetails.backdrop_path}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div id="details-menu" className="fader">
            <p>{mediaDetails.overview}</p>
          </div>
          <div id="fader-10" className="fader"></div>
          <div id="fader-9" className="fader"></div>
          <div id="fader-8" className="fader"></div>
          <div id="fader-7" className="fader"></div>
          <div id="fader-6" className="fader"></div>
          <div className="fader" id="fader-5"></div>
          <div className="fader" id="fader-4"></div>
          <div className="fader" id="fader-3"></div>
          <div className="fader" id="fader-2"></div>
          <div className="fader" id="fader-1"></div>
        </div>
      ) : null}
    </>
  );
};

export default FilmDisplay;
