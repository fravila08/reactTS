import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer>
      <Link to={"/"}>Home</Link>
      <Link to={"/guessANumber/"}>Number Guessing Game</Link>
      <Link to={"/pokemon/"}>Pokemon Team</Link>
      <Link to={"/rickAndMorty/"}>Rick and Morty</Link>
    </footer>
  )
}

export default Footer;