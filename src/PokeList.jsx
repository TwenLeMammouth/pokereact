import React, { useState } from "react";
import pokemons from "./pokemons.json"
import _ from "lodash";

export default function PokeList({ setPokeInfos, pokeInfos, setCurrentPoke, currentPoke }) {
    
    const [infos, setInfos] = useState("");

    const pokeMons = pokemons.pokemons
    const poke = _.uniqBy(pokeMons, "national_number")

    return( 
        <div className="pokemons">
            {poke.map((pokemon, i) => { 
                
                return (
                    <div className="single_poke" 
                        onClick={() => {
                            setCurrentPoke(pokemon);
                            setPokeInfos(!pokeInfos);
                        }}
                    >
                    <h1 className="pokeName">{pokemon.name}</h1>
                    <h2 className="idNum">{pokemon.national_number}</h2>
                    <img className="pokeSprite" src={pokemon.sprites.normal}/>
                </div>
                )
                
            })}
    </div>
    )
}