import React, {useState, useEffect} from 'react'

type Props = {}

const UseEffectDemo = (props: Props) => {
    const [brojac, setBrojac] = useState(0);
    const [dupliBrojac, setDupliBrojac] = useState(0);

    useEffect(()=>{
        console.log(`Ja sam use Effect koji se javlja baš svaki put nakon svakog iscrtavanja.`);
    })

    useEffect(()=>{
        console.log(`Bok ja sam use effect koji se javlja kad se promijeni stanje 'brojac'`);
    })

    useEffect(()=>{
        console.log("Dobar dan ljudi");
    })

    useEffect(()=>{
        console.log("Kad se ja javljam");
    }, [brojac, dupliBrojac])
/*
    useEffect(()=>{
        return ()=>{alert("čekaj skočimišu, di si krenija? nema nigdi dok me ne potvrdiš. Nema novog iscrtavanja")}
    })
*/

    useEffect(()=>{
    console.log(`ZAMKA`);
    return ()=>{alert ("Upao si u zamku!")}
}, [dupliBrojac])

useEffect(()=>{
    console.log(`Dorijan je kralj, neće se smesti ovdje`);
    return (()=>{
        alert ("Dobro si skužio!");
       // setBrojac (brojac+1) //staro brojac = 0, 1
    setBrojac((U)=>U+1) 
    })
}, [brojac])

    /*
    montira se komponenta
    nakon toga se izvršava use effect sa vraćenom cleanUp funkcijom setBrojac(1)
    klimkamo na botun za promjenu brojača
    bstanje brojac se mijenja iz 0 u 1
    aktivira se zamka (cleanup funkcija koja je postavljena u točki 2)
    ujeo vuk magare mi smo u beskonačnoj petlji

    */

  return (
    <div>
        <h1>UseEffectDemo</h1>
        <p>Brojac: {brojac}</p>
        <button onClick={()=>setBrojac(brojac + 1)}>Povećaj brojač</button>
    <hr/>
<p>Dupli brojac: {dupliBrojac}</p>
<button onClick={()=>setDupliBrojac(dupliBrojac + 1)}>Povećaj dupli brojač</button>

        </div>
  )
}

export default UseEffectDemo