import React, { useEffect, useState } from "react";
import "../stylesheets/PokemonCard.css";

const PokemonCard = ({pokemon, party, setParty}) => {
  const [frontDefault, setFrontDefault] = useState();
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const asyncDataLoad = async () => {
      const results = await getPokemonData();
      setTypes(results.types);
      setFrontDefault(results.sprites.front_default);
    }
    asyncDataLoad();
  }, []);

  const getPokemonData = async () => {
    const fetcher = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
    const data = await fetcher.json();
    return data
  };

  const { name, id } = pokemon;

  return (
    <div
      className="pokemon-card"
      onClick={() => {setParty([...party, pokemon])}}
    >
      <div className="top-circle">
        <img className="pokemon-image" src={frontDefault} alt={`Image of ${pokemon.name}`} />
      </div>
      <div className="pokemon-id">#{String(id).padStart(3, '0')}</div>
      <div className="pokemon-name">{name}</div>
      <div className="pokemon-types-container">
        {types.map((type) => {
          return <div className="pokemon-type">{type.type.name}</div>
        })}
      </div>
    </div>
  )
}

export default PokemonCard;
