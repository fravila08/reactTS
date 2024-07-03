import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import { useState } from "react";
import { CharacterInterface } from "./interfaces";
import { AnimatePresence } from "framer-motion";


function App() {
  const [favorites, setFavorites] = useState<Array<CharacterInterface>>([]);

  return (
    <>
      <AnimatePresence>
        <NavBar />
        <Outlet context={{ favorites, setFavorites }} />
      </AnimatePresence>
    </>
  );
}

export default App;
