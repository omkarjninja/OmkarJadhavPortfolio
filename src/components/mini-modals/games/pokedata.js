import React, { useState, useEffect } from 'react';

function Pokedex(props) {
  
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokeid,setpokeid]=useState(1);
  let trick;
  trick=props.id
 
  
  

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${trick}`);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        setError("Image Fetching Failed");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [pokeid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className='hidden'>Error: {error.message}</div>;
  }

  return (
    <>
    
    
      <div className="bg-transparent" >
      
     <div className="cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
       <img style={{maxWidth:"100px",maxHeight:"100px",minHeight:"100px",minWidth:"100px"}} className="flex rounded-lg overflow-hidden" src={`https:unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${trick}.svg`}   alt="product" />
       <div>
         <div className="my-6 flex items-center justify-between px-4">
           {/* <p className="font-bold text-gray-500">Pokemon Name</p> */}
           <p className="rounded-full bg-black ml-2 px-2 py-0.5 text-xs font-semibold text-white">{pokemonData.forms[0].name}</p>
         </div>
         <div className="my-4 flex items-center justify-between px-4">
           {/* <p className="text-sm font-semibold text-gray-500">Pokemon Type</p> */}
           <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">{pokemonData.types[0].type.name} type</p>
         </div>
        
       </div>
     </div>
 </div>
   
    </>
  );
}

export default Pokedex;
         