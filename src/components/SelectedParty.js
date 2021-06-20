import React from 'react';
import "../stylesheets/SelectedParty.css";
import pokeballImage from '../images/pokeball_PNG8 1.png';

const SelectedParty = () => {
  return (
    <div className="selected-party">
      <img className="pokeball-image" src={pokeballImage} />
      <img className="pokeball-image" src={pokeballImage} />
      <img className="pokeball-image" src={pokeballImage} />
      <img className="pokeball-image" src={pokeballImage} />
      <img className="pokeball-image" src={pokeballImage} />
      <img className="pokeball-image" src={pokeballImage} />
      <div className="party-button">
        <p>Party</p>
      </div>
    </div>
  )
}

export default SelectedParty;
