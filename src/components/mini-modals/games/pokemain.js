import Pokedex from "./pokedata";

function Pokecollect(){

    const ray=[];
    for (let index = 0; index <= 151; index++) {
        
        ray.push(index);
    }

    return(
        <>
        <div className="w-11/12 ml-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
       {ray.map((poke)=><Pokedex id={poke}></Pokedex>)}
       </div>
        </>
    )
}
export default Pokecollect;