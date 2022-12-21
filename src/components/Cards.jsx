import React from "react";
// import ContentCard from "./ContentCard";
import { useState } from "react";
import { PokemonDetail } from "./PokemonDetail";

function Cards({ pokemones }) {
  
return (
    <div className="container-card ">
      {pokemones.map((pokemon) => {

        return (
          <div className="card" key={pokemon.name}>
           <PokemonDetail pokemon={pokemon}/>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
