import { useEffect, useState } from "react";
import {
  PokemonCardProps,
  PokemonResponse,
  getPokemonData,
} from "../utilities";

const PokemonCard: React.FC<PokemonCardProps> = ({ name, pokemonData }) => {
  const [selectedPokemon, setSelectedPokemon] =
    useState<PokemonResponse | null>(pokemonData);

  useEffect(() => {
    if (!selectedPokemon) {
      const getPokemonDetails = async (): Promise<void> => {
        setSelectedPokemon(await getPokemonData(name));
      };
      getPokemonDetails();
    }
  }, []);

  return (
    <>
      {selectedPokemon ? (
        <div className="card">
          <img src={selectedPokemon.img} />
          <p>{selectedPokemon.name}</p>
        </div>
      ) : null}
    </>
  );
};

export default PokemonCard;
