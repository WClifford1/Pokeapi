import React from "react";
import PokemonCard from './PokemonCard';
import "../stylesheets/GridContainer.css"

const GridContainer = ({pokemon, showEmptyCards, party, setParty}) => {
  return (
    <div className="grid-container">
      {pokemon.map((pokeData) => {
        return (
          <PokemonCard
            pokemon={pokeData}
            party={party}
            setParty={setParty}
          />
        )
      })}
    </div>
  )
}
export default GridContainer;
