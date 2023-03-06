import React from 'react'

type Props = {
    brojac: number,
    setBrojac: Function
}

const Dijete = ({brojac, setBrojac}: Props) => {
  return (
    <div style={{backgroundColor:"teal"}}>
        <h4>Bok ljudi, ja sam dijete, vidite kako dobro brojim!</h4>
        <h2> Trenutna vrijednos brojaca je {brojac}</h2>
        <button onClick={()=>setBrojac(brojac+1)}>Povećaj brojač za 1</button>
    </div>
  )
}

export default Dijete