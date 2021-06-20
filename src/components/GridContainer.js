import React from "react";
import PokemonCard from './PokemonCard';
import "../stylesheets/GridContainer.css"

const GridContainer = ({pokemon}) => {
  return (
    <div class="grid-container">
      {pokemon.map((pokeData) => {
        return <PokemonCard pokemon={pokeData} />
      })}
    </div>
  )
}
export default GridContainer;
