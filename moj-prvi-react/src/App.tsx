import React, {useState} from 'react';
import { Link } from "react-router-dom";

import logo from './logo.svg';
import MojaPrvaKomponenta from './MojaPrvaKomponenta';
import UspijesniBotun from './components/common/UspijesniBotun';
import MojaPrvaKlasnaKomponenta from './components/MojaPrvaKlasnaKomponenta';
import PametnaKlasnaKompnenta from './components/PametnaKlasnaKomponenta';
import { GrbVjezba } from './components/GrbVjezba';
import './App.css';

function App() {
  const [textZaSlanje, setTextZaSlanje] = useState("Potvrdi registraciju");
  const [stanje2, setStanje2] = useState("Drugo stanje");

  let mojeIme = "Antun Nakić"

  return (
    <div className="App">
      <header className="App-header" onClick={()=>{console.log(`tu sam ${textZaSlanje}`);setTextZaSlanje(textZaSlanje+"d")}}>
        <GrbVjezba/>
        <PametnaKlasnaKompnenta message='Broj klikova'/>
        <MojaPrvaKlasnaKomponenta posebanText="ajde dodaj ovo extra na kraj"/>
        <Link to="/nasaKomponenta">Link na drugi page (ispravan SPA način)</Link>
        <a href="/nasaKomponenta">Link na drugi page (na krivi nacin)</a>
        <MojaPrvaKomponenta />
        <UspijesniBotun text={textZaSlanje} velicinaFonta="24px" />
        <div onClick={()=>setStanje2(stanje2+"1")}>
          <UspijesniBotun text={stanje2} />
        </div>
        <UspijesniBotun text="Finish" />
        <UspijesniBotun text="Finished yesterday" xyz='dghjksdgj'/>
        <UspijesniBotun text="Finished yesterday" xyz='dghjksdgj' zzz={{a:84}}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. žžbjkfdbghjfbgf
        </p>
        <p>Dobar dan svima. Podržava vas Vaš profesor {mojeIme}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;