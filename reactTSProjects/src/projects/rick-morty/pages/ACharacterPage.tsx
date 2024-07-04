import React from "react";
import { useLoaderData } from "react-router-dom";
import { CharacterInterface } from "../interfaces";

const ACharacterPage: React.FC = () => {
  const data = useLoaderData() as CharacterInterface;

  return (
    <div id="aCharacter">
      <img src={data.image} />
      <h1>{data.name}</h1>
      <div id="infoHolder">
        <ul>
          <li>Status: {data.status}</li>
          <li>Species: {data.species}</li>
        </ul>
        <ul>
          <li>Gender: {data.gender}</li>
          <li>Location: {data.origin.name}</li>
        </ul>
      </div>
    </div>
  );
};

export default ACharacterPage;
