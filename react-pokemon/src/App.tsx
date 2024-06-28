import { useEffect, useState } from "react";
import { getPokemonData, getPokemonTeam, PokemonResponse } from "./utilities";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

function App() {
  const [pokemonTeam, setPokemonTeam] = useState<Array<string>>([]);
  const [firstPokemon, setFirstPokemon] = useState<PokemonResponse | null>(
    null
  );

  const getFirstPokemon = async (): Promise<void> => {
    setFirstPokemon(null);
    let choice: number = Math.floor(Math.random() * 1302);
    setFirstPokemon(await getPokemonData(choice));
  };

  useEffect(() => {
    if (firstPokemon) {
      const getTeam = async (): Promise<void> => {
        setPokemonTeam(await getPokemonTeam(firstPokemon.typeUrl));
      };
      getTeam();
    }
  }, [firstPokemon]);

  useEffect(() => {
    console.log(firstPokemon, pokemonTeam);
  }, [firstPokemon]);

  return (
    <>
      <div id="header">
        <h1>Pokemon Team</h1>
        <button onClick={getFirstPokemon}>Get My Team</button>
      </div>
      <div id="divider">
        <div id="left"></div>
        <div id="center"></div>
        <div id="right"></div>
      </div>
      {firstPokemon ? (
        <div id="pokemonCardHolder">
          <PokemonCard name={firstPokemon.name} pokemonData={firstPokemon} />
          {pokemonTeam.map((pokemon, idx) => (
            <PokemonCard key={idx} name={pokemon} pokemonData={null} />
          ))}
        </div>
      ) : null}
    </>
  );
}

export default App;
