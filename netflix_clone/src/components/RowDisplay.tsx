import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { RowDisplayPropsI } from "../utilities/interfaces";

const RowDisplay: React.FC<RowDisplayPropsI> = ({ header, movies }) => {
  const ref = useRef<null | HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (ref.current) {
      ref.current.scrollLeft += offset;
    }
  };

  return (
    <div className="row-holder">
      <p className="row-header">{header}</p>
      <div className="movie-row" ref={ref}>
        <button
          className="button-scroll"
          style={{ left: "3vmin" }}
          onClick={() => scroll(-600)}
        >
          {"<"}
        </button>
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
        <button
          className="button-scroll"
          style={{ right: "2.5vmin" }}
          onClick={() => scroll(600)}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default RowDisplay;
