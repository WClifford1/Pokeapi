import React from 'react';
import GridContainer from './GridContainer';
import ChooseYourTeam from './ChooseYourTeam';
import SelectedParty from './SelectedParty';
import '../stylesheets/PokeDex.css'

const PokeDex = ({ pokemon, party, setParty }) => {
  return (
    <div className="pokedex">
      <ChooseYourTeam />
      <GridContainer
        pokemon={pokemon.slice(0, 12)}
        showEmptyCards={false}
        party={party}
        setParty={setParty}
      />
      <SelectedParty />
    </div>
  )
}

export default PokeDex;
