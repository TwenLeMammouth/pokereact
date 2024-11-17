import React, {useState} from 'react';
import './App.css';
import Navbar from "./NavBar"
import PokeList from "./PokeList"
import PokeInfo from "./PokeInfo"

export default function App() {
  const [pokeInfos, setPokeInfos] = useState(false);
  const [currentPoke, setCurrentPoke] = useState("");
  return (
    <div>
      <Navbar setPokeInfos={setPokeInfos} pokeInfos={pokeInfos}/>
      <div className="App">
        {!pokeInfos ? (
          <PokeList
          setPokeInfos={setPokeInfos}
          pokeInfos={pokeInfos}
          setCurrentPoke={setCurrentPoke}
          currentPoke={currentPoke}
          />
        ) : (
          <div>
          <PokeList
          setPokeInfos={setPokeInfos}
          pokeInfos={pokeInfos}
          setCurrentPoke={setCurrentPoke}
          currentPoke={currentPoke}
          />
          <PokeInfo
          setCurrentPoke={setCurrentPoke}
          currentPoke={currentPoke}
          />
          </div>
        )}
        </div>

    </div>
  );
}


