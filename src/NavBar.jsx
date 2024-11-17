import React from "react";
import logo from './logo.svg';

export default function Navbar({ setPokeInfos, pokeInfos }) {
    
    return (
        <div className="pokedex">
            
                <div>
                    <img className="greenlight" src="https://findicons.com/files/icons/1933/symbols/128/green_light.png"/>
                    <img className="redlight" src="https://findicons.com/files/icons/1933/symbols/128/red_light.png"/>
                </div>
            <img className="favorite" src="https://image.flaticon.com/icons/png/512/188/188931.png"/>
            <div className="orb"
            onClick={() => setPokeInfos(!pokeInfos)}>
            <img src={logo} className="App-logo" alt="logo" />
            </div>
        </div>
    )
}