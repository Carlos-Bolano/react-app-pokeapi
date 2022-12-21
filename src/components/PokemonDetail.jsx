import { useEffect, useState } from "react";


export function PokemonDetail({ pokemon }) {
  const [img, setImg] = useState("");
  const [stats, setStats] = useState([]);
  const [type, setType] = useState([]);

  useEffect(() => {
    async function obtenerPokemon(name) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();

      setType(data.types);
      setStats(data.stats);
      setImg(data.sprites.other.dream_world.front_default); // con una ruta de imagen
     
    }
    obtenerPokemon(pokemon.name);
  }, []);

  return (
   <>
    <div className="container-right">
          <h3 > {pokemon.name}</h3>
          {type.map((item) => {
            return <div className={item.type.name} > {item.type.name}</div>;
           
          })}
        </div>
        <div className="container-left">
              <img src={img} className='imagenes'/>
        </div>
   </>
      
       
   
    

    // <div className=" d-flex felx-row p-4 ">
    //   <div className="col w-30 text-right">
    //     <h3 className=" text-capitalize fw-bold text-dark mb-2">
    //       {pokemon.name}
    //     </h3>
    //     <div className=" mb-3 img rounded-2">
    //       <img
    //         src={img}
    //         className=" types p-1 rounded-circle bg-warning border border-dark"
    //         style={divStyleImg}
    //       />
    //     </div>
    //     <div className="d-flex flex-row gap-4 justify-content-right">
    //       {type.map((item) => {
    //         return (
    //           <div className="text-capitalize text-dark rounded-4 p-1 px-4 types ">
    //             {item.type.name}
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    //   <div className=" text-right d-flex flex-column mt-2  ">
    //     {stats.map((item) => {
    //       return (
    //         <div className="d-flex justify-content-between ">
    //           <div className=" text-capitalize">{item.stat.name} </div>
    //           <div className="text-primary">{item.base_stat}</div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
    // <div className="content-right " style={{ width: "55%" }}>
    //     <div className=" d-flex flex-column  ">
    //       {stats.map((item) => {
    //         return (
    //           <div className="d-flex justify-content-between ">
    //             <div className=" text-capitalize">{item.stat.name} </div>
    //             <div className="text-primary">{item.base_stat}</div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
  );
}
