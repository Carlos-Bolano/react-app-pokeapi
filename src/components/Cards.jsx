import React from "react";
// import ContentCard from "./ContentCard";
import { CardsContent } from "./CardsContent";

function Cards({ pokemones }) {
  
return (
    <div className="container-card ">
      {pokemones.map((pokemon) => {

        return (
          <div className="card" key={pokemon.name}>
           <CardsContent pokemon={pokemon}/>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
