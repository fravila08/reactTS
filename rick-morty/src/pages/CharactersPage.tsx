import React, { useEffect, useState } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import {
  CharacterInterface,
  FavoritesContext,
  GetCharactersI,
  RickAndMortyAPIResp,
} from "../interfaces";
import { motion } from "framer-motion";
import CharCard from "../components/CharCard";
import axios from "axios";
import { Button } from "react-bootstrap";

const CharactersPage: React.FC = () => {
  const data = useLoaderData() as GetCharactersI;
  const [characters, setCharacters] = useState<Array<CharacterInterface>>(
    data.results
  );
  const [requestUrl, setRequestUrl] = useState<string | null>(null);
  const [next, setNext] = useState<string | null>(data.next);
  const [prev, setPrev] = useState<string | null>(data.prev);
  const { favorites, setFavorites } = useOutletContext() as FavoritesContext;

  const updateCharacters = async (url: string): Promise<void> => {
    let response = await axios.get(url);
    let resData: RickAndMortyAPIResp = response.data;
    setNext(resData.info.next);
    setPrev(resData.info.prev);
    setCharacters(resData.results);
  };

  useEffect(() => {
    if (requestUrl) {
      updateCharacters(requestUrl);
    }
  }, [requestUrl]);

  return (
    <motion.div
      className="characters"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <h1>Characters from Rick and Morty</h1>
      <div id="buttonHolder">
        <div>
          {prev ? (
            <Button
              variant="dark"
              onClick={() => {
                setRequestUrl(prev);
              }}
            >
              Prev
            </Button>
          ) : null}
        </div>
        <div>
          {next ? (
            <Button
              variant="dark"
              onClick={() => {
                setRequestUrl(next);
              }}
            >
              Next
            </Button>
          ) : null}
        </div>
      </div>
      <div className="cardHolder">
        {characters.map((char) => (
          <CharCard
            key={char.id}
            character={char}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default CharactersPage;
