import React, { useEffect, useState } from 'react';
import './App.css';
import './stylesheets/Toolbar.css'
import companyLogo from './images/Josephmark 1.png';
import ashPicture from './images/Ellipse 27ash.jpg';
import PokeDex from './components/PokeDex';
import Party from './components/Party';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// TODO fix up image path - maybe host it somewhere. Read that react guide about best practices. Pretty sure the above isnt a best practice.

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [party, setParty] = useState([]);
  useEffect(() => {
    const asyncDataLoad = async () => {
      const results = await firstGenerationPokemon();
      const pokemonArray = results.map(async (pokemon) => {
        const result =  await fetchPokemonData(pokemon);
        return result;
      })
      const detailedResults = await Promise.all(pokemonArray);
      const sortedPokemon = detailedResults.sort((a, b) => { 
        return a.id - b.id;
      });
      setPokemon(sortedPokemon);
    }
    asyncDataLoad();
  }, []);

  const fetchPokemonData = async (pokemon) => {
    let pokemonUrl = pokemon.url
    const fetcher = await fetch(pokemonUrl);
    const data = await fetcher.json();
    return data
  }

  const firstGenerationPokemon = async () => {
    const fetcher = await fetch('https://pokeapi.co/api/v2/generation/1');
    const data = await fetcher.json();
    return data.pokemon_species;
  };

  return (
    <Router>
      <div className="topnav">
        <div className="container">
          <a className="logo" href="https://www.josephmark.com.au/">
            <img src={companyLogo} alt="Joseph Mark logo"/>
          </a>
          <div className="right-section">
            <Link className="nav-menu-item" to="/pokedex">Pokedex</Link>
            <Link className="nav-menu-item" to="/party">Party</Link>
            <img className="ash-picture nav-menu-item" src={ashPicture} alt="Ash"/>
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/pokedex">
          <PokeDex
            pokemon={pokemon}
            party={party}
            setParty={setParty}
          />
        </Route>
        <Route path="/party">
          <Party
            party={party}
            setParty={setParty}
          />
        </Route>
        <Route path="/">
          <PokeDex
            pokemon={pokemon}
            party={party}
            setParty={setParty}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

