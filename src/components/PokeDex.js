import React from 'react';
import GridContainer from './GridContainer';
import ChooseYouTeam from './ChooseYouTeam';
import SelectedParty from './SelectedParty';
import '../stylesheets/PokeDex.css'

const PokeDex = ({ pokemon }) => {
  return (
    <div className="pokedex">
      <ChooseYouTeam />
      <GridContainer pokemon={pokemon.slice(0, 12)} />
      <SelectedParty />
    </div>
  )
}

export default PokeDex;
