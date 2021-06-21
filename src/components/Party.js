import React from 'react';
import '../stylesheets/Party.css'
import ChooseYourTeam from "./ChooseYourTeam";
import GridContainer from "./GridContainer";
import SelectedParty from "./SelectedParty";

const Party = ({ party, setParty }) => {
  return (
    <div className="pokedex">
      <ChooseYourTeam />
      <GridContainer
        pokemon={party}
        party={party}
        setParty={setParty}
      />
      <SelectedParty />
    </div>
  )
}

export default Party;
