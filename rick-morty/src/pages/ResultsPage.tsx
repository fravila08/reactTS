import React from "react";
import { motion } from "framer-motion";
import CharCard from "../components/CharCard";
import { useLoaderData, useParams } from "react-router";
import { FavoritesContext, CharacterInterface } from "../interfaces";
import { useOutletContext } from "react-router";

const ResultsPage: React.FC = () => {
  const filteredCharacters = useLoaderData() as Array<CharacterInterface>;
  const { favorites, setFavorites } = useOutletContext() as FavoritesContext;
  const { searchInput } = useParams();

  return (
    <motion.div
      className="characters"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <h1>Results for {searchInput?.toUpperCase()}</h1>
      <div className="cardHolder">
        {filteredCharacters.map((char) => (
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

export default ResultsPage;
