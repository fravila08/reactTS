import React, { useEffect, useState } from "react";
import TrendingMedia from "../components/TrendingMedia";
import CategoryMedia from "../components/CategoryMedia";
import { GenresI, HomeDisplayPropsI } from "../utilities/interfaces";
import { getGenres } from "../utilities/api";

const HomeDisplay: React.FC<HomeDisplayPropsI> = ({ media }) => {
  const [movieGenres, setMovieGenres] = useState<Array<GenresI>>([]);

  useEffect(() => {
    setMovieGenres([]);
    const fetchGenres = async () => {
      setMovieGenres(await getGenres(media));
    };
    fetchGenres();
  }, [media]);

  return (
    <div className="display">
      <TrendingMedia media={media} />
      {movieGenres.map((genre) => (
        <CategoryMedia
          key={genre.id}
          id={genre.id}
          name={genre.name}
          mediaType={media}
        />
      ))}
    </div>
  );
};

export default HomeDisplay;
