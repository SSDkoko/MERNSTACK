import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const fetchPokemonData = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(response => {
        const results = response.data.results;
        setPokemonList(results);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };
  
  return (
    <div className="App">
      <h1>Pokémon List</h1>
      
      {pokemonList.length > 0 ? (
        <ul>
          {pokemonList.map((pokemon, index) => (
            <li key={index}>{pokemon.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
