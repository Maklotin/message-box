import './App'
import './App.css';
import React, { useState } from 'react';
import kontorer from './kontor.json';
import { db } from './firebase';
import { uid } from 'uid';
import { set, ref } from "firebase/database"


const SkrivNyBeskjed = () => {

    const [tittel, setTittel] = useState('');
    const [innhold, setInnhold] = useState('');
    const [forfatter, setForfatter] = useState('');
    const [kontor, setKontor] = useState('');
    const [merke, setMerke] = useState('');
  
  
  
    var kontorerLand = []
    for (let i = 0; i < kontorer.length; i++) {
      kontorerLand.push(kontorer[i].country)
    }
  
    //create
    const writeToDatabase = (e) => {
      e.preventDefault()
      const uuid = uid()
      set(ref(db, `/${uuid}`), {
        tittel: tittel,
        innhold: innhold,
        forfatter: forfatter,
        kontor: kontor,
        merke: merke,
        uuid: uuid,
      })
      setTittel('')
      setInnhold('')
      setForfatter('')
      setKontor('')
      setMerke('')
      window.alert("Beskjed ble sendt!")

  
    }
  
    const handleTittel = (e) => {
      setTittel(e.target.value)
    }
  
    const handleInnhold = (e) => {
      setInnhold(e.target.value)
    }
  
    const handleKontor = (e) => {
      setKontor(e.target.value);
    }
  
    const handleForfatter = (e) => {
      setForfatter(e.target.value)
    }
  
    const handleMerke = (e) => {
      setMerke(e.target.value)
    }
  
    var liteViktig = "lite_viktig"
    var littViktig = "litt_viktig"
    var viktig = "viktig"
  
  
    return (
      <>
        <div className="innhold">
          <div id="topp_innhold">
            <h1>Skriv ny beskjed</h1>
            <hr id="strek"></hr>
          </div>
          <form id="send_beskjed">
            <p>Skriv en ny beskjed til de andre.</p>
  
            <input value={tittel} onChange={handleTittel} className='tekst_input' placeholder='Overskrift/Tittel' type="text"></input>
            <textarea value={innhold} onChange={handleInnhold} id="tekstboks"></textarea>
            <input value={forfatter} onChange={handleForfatter} className='tekst_input' placeholder='Forfatter' type="text"></input>
            <select className='knapp' id="velg_kontor" onChange={handleKontor} value={kontor}>
              {kontorerLand.map((x, y) => <option key={y}>{x}</option>)}
            </select>
            <select className='knapp' onChange={handleMerke} value={merke}>
              <option>velg merke</option>
              <option value={liteViktig}>Lite viktig</option>
              <option value={littViktig}>Litt viktig</option>
              <option value={viktig}>Viktig</option>
            </select>
            <button onClick={writeToDatabase} className='knapp'>Send beskjed</button>

          </form>
        </div>
        
      </>
    )
  }
  
export default SkrivNyBeskjed;  