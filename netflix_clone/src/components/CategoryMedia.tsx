import React, { useState, useEffect } from "react";
import { CategoryMediaPropsI, MovieDetailsI } from "../utilities/interfaces";
import { getMediaByGenre } from "../utilities/api";
import RowDisplay from "./RowDisplay";

const CategoryMedia: React.FC<CategoryMediaPropsI> = ({ name, id, mediaType }) => {
  const [media, setMedia] = useState<Array<MovieDetailsI>>([]);

  useEffect(() => {
    setMedia([])
    const getMedia = async () => {
      setMedia(await getMediaByGenre(mediaType, id));
    };
    getMedia();
  }, [mediaType]);


  return (
    <>
      {media ? <RowDisplay movies={media} header={name.toUpperCase()} /> : null}
    </>
  );
};

export default CategoryMedia;
