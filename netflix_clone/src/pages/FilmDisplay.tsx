import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { SeriesDetailsI, FilmDetailsI } from "../utilities/interfaces";

const FilmDisplay: React.FC = () => {
  const loaderData = useLoaderData();
  const [mediaDetails, setMediaDetails] = useState<
    SeriesDetailsI | FilmDetailsI | null
  >(null);

  const isTvType = (data: any): data is SeriesDetailsI => {
    return (data as SeriesDetailsI).last_air_date !== undefined;
  };
  const isMovieDetails = (data: any): data is FilmDetailsI => {
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

  useEffect(() => {
    console.log(mediaDetails);
  }, [mediaDetails]);

  return <h1>Id selected </h1>;
};

export default FilmDisplay;
