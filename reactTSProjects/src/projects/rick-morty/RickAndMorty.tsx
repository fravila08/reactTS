import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import { CharacterInterface } from "./interfaces";
import { AnimatePresence } from "framer-motion";
import "./rickAndMorty.css";

const RickAndMorty: React.FC = () => {
  const [favorites, setFavorites] = useState<Array<CharacterInterface>>([]);

  return (
    <>
      <AnimatePresence>
        <NavBar />
        <Outlet context={{ favorites, setFavorites }} />
      </AnimatePresence>
    </>
  );
};

export default RickAndMorty;
