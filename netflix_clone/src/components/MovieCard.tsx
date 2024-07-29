import React from "react";
import { ContextI, MovieDetailsI } from "../utilities/interfaces";
import { useNavigate, useOutletContext } from "react-router-dom";

const MovieCard: React.FC<MovieDetailsI> = (props) => {
  const {selectedTab} = useOutletContext() as ContextI
  const navigate = useNavigate()


  const seeDetails = () => {
    console.log(selectedTab)
    navigate(`/media/${selectedTab}/film/${props.id}/`)
  }
  return (
    <>
      {props.poster_path ? (
          <img className="card" onClick={seeDetails}
            src={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
          />
      ) : null}
    </>
  );
};

export default MovieCard;
