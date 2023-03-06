import React, {useState} from 'react';

import slika from './slika.jpg'
import Sahovnica from './components/Sahovnica';
import Sat from './components/Sat';
import CustomSat from './components/CustomSat';
import VjezbamForme from './components/VjezbamForme';
import './App.css';

function App() {
  const [sakrij, setSakrij] = useState(false);
  const [customSat, setCustomSat] = useState(0);
  const [prezime,setPrezime]= useState("");


  const handleClick = (noviCustomSat: any, e: any) =>{
    console.log(`${e.toString()} + ${noviCustomSat}`)
    if(e.target.tagName === "P")
      setCustomSat(noviCustomSat)
    else
      setCustomSat(0)
  }

  const poljePodataka = ["Dinamo", "Šibenik", "Osijek", "Hajduk"];

  return (
    <div className="App">
      < img src = { slika } alt="kruna"/>
      <Sahovnica/>
      <button onClick={()=>setSakrij((staro)=>!staro)}>{sakrij ? "Otrkij" : "Sakrij"}</button>
      {sakrij ? "" : <Sat/>}
      <Sat/>

      <CustomSat customSat={customSat} handleClick={handleClick} />
      <p onClick={(e)=>handleClick(2, e)}>Aj klikni mene</p>

      <ul>
      {poljePodataka.map((clan,index)=>{
          return <li key={index}>{clan}</li>
        }
        )}
      </ul>
      <VjezbamForme prezime={prezime} changePrezime={setPrezime} />
    </div>
  );
}

export default App;