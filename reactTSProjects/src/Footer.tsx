import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer>
      <Link to={"/reactTS/"}>Home</Link>
      <Link to={"/reactTS/guessANumber/"}>Number Guessing Game</Link>
      <Link to={"/reactTS/pokemon/"}>Pokemon Team</Link>
      <Link to={"/reactTS/rickAndMorty/"}>Rick and Morty</Link>
    </footer>
  )
}

export default Footer;