import React from "react";
import { useState } from "react";

export default function ContentCard({ pokemon }) {
 
  const [img, setImg] = useState("");
  const [stats, setStats] = useState([]);
  const [type, setType] = useState([]);

  async function obtenerPokemon(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
 
  }
  return (
    <div className="content">
      <div className="content-right">
        <h3>{pokemon.name}</h3>
        
      </div>

      <div className="content-left"></div>
    </div>
  );
}
