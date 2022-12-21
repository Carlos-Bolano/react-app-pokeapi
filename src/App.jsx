import "./App.css";
import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import { ButtonsNav } from "./components/ButtonsNav";

function App() {
  const [pokemones, setPokemones] = useState([]);


  const [anterior, setAnterior] = useState(null);
  const [siguiente, setSiguiente] = useState(null);
  const [actual, setActual] = useState(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"
  );

  async function obtenerPokemones(actual) {
    const response = await fetch(actual);
    const data = await response.json();
    const results = await data.results;

    setPokemones(results);
    setAnterior(data.previous);
    setSiguiente(data.next);

   
  }

  useEffect(() => {
    obtenerPokemones(actual);
  }, [actual]);


  return (
    <>
      <Navbar />
      <div className="App">
        <img
          src="https://static.wikia.nocookie.net/espokemon/images/4/46/Pok%C3%A9mon_Gotta_catch_em_all_logo.png"
          alt="Logo Pokemon"
        />
      </div>
      <ButtonsNav
        onClick={() => {
          anterior !== null && setActual(anterior);
        }}
        mostrar={"Prev"}
      />
      <ButtonsNav
        onClick={() => {
          siguiente !== null && setActual(siguiente);
        }}
        mostrar={"Next"}
      />

      <Cards pokemones={pokemones} />

      <ButtonsNav
        onClick={() => {
          anterior !== null && setActual(anterior);
        }}
        mostrar={"Prev"}
      />
      <ButtonsNav
        onClick={() => {
          siguiente !== null && setActual(siguiente);
        }}
        mostrar={"Next"}
      />
    </>
  );
}

export default App;
