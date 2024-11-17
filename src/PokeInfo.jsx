import React from "react";


export default function PokeInfo({setCurrentPoke, currentPoke}) {

    return (
        <div>
            <div className="pokedexInfo">
            <div className="pokedexBorder"></div>
                <h1> PokedexInfo </h1>
                <img className="animPoke" alt="Empty" src={currentPoke.sprites.animated}/>
            </div>

        </div>
    )
}