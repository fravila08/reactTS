import React, { useState, useEffect } from "react";
import { MovieDetailsI, TrendingMediaPropsI } from "../utilities/interfaces";
import { getTrendingMedia } from "../utilities/api";
import RowDisplay from "./RowDisplay";
const TrendingMedia: React.FC<TrendingMediaPropsI> = ({ media }) => {
  const [trending, setTrending] = useState<Array<MovieDetailsI>>([]);

  useEffect(() => {
    const fetchMedia = async () => {
      setTrending(await getTrendingMedia(media));
    };
    fetchMedia();
  }, [media]);

  return (
    <RowDisplay
      movies={trending}
      header={`TRENDING ${
        media === "movie" ? media.toUpperCase() : "TV SHOW"
      }S`}
    />
  );
};

export default TrendingMedia;
