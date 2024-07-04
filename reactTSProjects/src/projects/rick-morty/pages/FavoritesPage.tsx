import React from "react";
import CharCard from "../components/CharCard";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { FavoritesContext } from "../interfaces";

const FavoritesPage: React.FC = () => {
  const { favorites, setFavorites } = useOutletContext() as FavoritesContext;

  return (
    <motion.div
      className="characters"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration:1 } }}
    >
      <h1>Favorites</h1>
      <div className="cardHolder">
        {
        favorites.length ?
        favorites.map((char) => (
          <CharCard
            key={char.id}
            character={char}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        ))
      :
      <h2>You Don't Have Any Favorites</h2>
      }
      </div>
    </motion.div>
  );
};

export default FavoritesPage;
