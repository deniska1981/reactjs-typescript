import React from 'react'
import { Link } from "react-router-dom";

const JosJednaKomponenta = () => {
  const clubs = ['Hajduk','Dinamo','Šibenik','Osijek'];
  const slucajniBroj = Math.floor(Math.random()*4);

  //uvijetno renderiranje uz pomoć varijable
  const parniIliNeparni = new Date().getDate()%2 ? `neparan` : `paran`; 

  const ispisiGubitnika = (pridjev: string): string=>{
    return `${pridjev} je klub ${clubs[Math.floor(Math.random()*4)]}`
  }

  return (
    <>
      <Link to="/">Link na homepage (ispravan SPA način)</Link><br/>
      <a href="/">Link na homepage (na krivi nacin)</a>
      <div> JosJednaKomponenta {(new Date()).toDateString()} </div>
      <p>jkdsghjkfsdgh</p>
      <h1>Najbolji klub u HNLu je {clubs[slucajniBroj]}</h1>
      <h3>{ispisiGubitnika('GNjidav')}</h3>
      <p>Danas je {parniIliNeparni} dan</p>

      {clubs[slucajniBroj] === "Hajduk" && <p>Lažu te gori ovo za Hajduk!</p>}

      {"hfdghdfghjdgfhjdgfd" ? "ternarni je prosao" : "ternarni nije prosao"}
      
    </>
  )
}

export default JosJednaKomponenta