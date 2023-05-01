import './App.css';
import React, { useState, useEffect } from 'react';
import meldinger from './meldinger.json';
import forfattere from './folk.json';
import kontorer from './kontor.json';
import {db} from './firebase';
import { uid } from 'uid';
import { set, ref, onValue } from "firebase/database"
import { signInWithEmailAndPassword } from 'firebase/auth';


function RegistrerBruker() {

  const [brukernavn, setBrukernavn] = useState('');
  const [passord, setPassord] = useState('');
  const [kontor, setKontor] = useState('');


  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const [alleBrukernavn, setAlleBrukernavn] = useState([])

  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      //!== betyr om "data" IKKE har verdi "null" så gjør følgende:
      if (data !== null) {
        Object.values(data).map((brukernavn) => {
          setAlleBrukernavn((oldArray) => [...oldArray, brukernavn]);
        })
      }
    })
  }, [])


  const handleBrukernavn = (e) => {
    setBrukernavn(e.target.value);
    setSubmitted(false);
  };

  const handlePassord = (e) => {
    setPassord(e.target.value);
    setSubmitted(false);

  }

  const handleKontor = (e) => {
    setKontor(e.target.value);
    setSubmitted(false)
  }



  var kontorerLand = []
  for (let i = 0; i < kontorer.length; i++) {
    kontorerLand.push(kontorer[i].country)
  }


  const SuccessMessage = () => {
    return (
      <div
        className="success" style={
          { display: submitted ? '' : 'none', }
        }>
        <h3>{brukernavn} har blitt registrert</h3>

      </div>
    );
  }

  const ErrorMessage = () => {
    return (
      <div className='error'
        style={{ display: error ? '' : 'none', }}>
        <h3>Ett problem oppsto, sørg for at du har fylt ut alle feltene</h3>
      </div>
    )
  }

  //read
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(brukernavn, passord)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  //create
  const writeToDatabase = (e) => {
    e.preventDefault()
    console.log("navn: " + brukernavn + ", passord: " + passord + ", kontor: " + kontor)

    if (brukernavn === '' || passord === '' || kontor === '') {
      setError(true);
    } else {
      setError(false);
      setSubmitted(true);

      const uuid = uid()
      set(ref(db, `/${uuid}`), {
        brukernavn: brukernavn,
        passord: passord,
        kontor: kontor,
        uuid: uuid,
      })
      
    }
    setBrukernavn("");
    setPassord("");
    setKontor("");
  }

  return (
    <>
      <div className='messages'>
        {ErrorMessage()}
        {SuccessMessage()}
      </div>
      <form id="registrer_bruker">
        <input className='tekst_input' id="ny_navn" type="text" onChange={handleBrukernavn} value={brukernavn} placeholder='Navn Navnesen'></input>
        <input className='tekst_input' id="ny_passord" type="password" onChange={handlePassord} value={passord} placeholder='Passord'></input>
        <h3 id="tekst_kontor">Velg Kontor</h3>
        <select className='knapp' id="velg_kontor" onChange={handleKontor} value={kontor}>
          {kontorerLand.map((x, y) => <option key={y}>{x}</option>)}
        </select>
        <button id="reg_bruker_knapp" className="knapp" onClick={writeToDatabase}>Registrer Bruker</button>
      </form>
    </>
  )



}


const App = () => {



  const MsgBoard = () => {
    //Nyeste viktig meldinger
    var nyViktigNavn = meldinger.important[meldinger.important.length - 1].name
    var nyViktigKontor = meldinger.important[meldinger.important.length - 1].office
    var nyViktigTid = meldinger.important[meldinger.important.length - 1].time

    //Nyeste litt viktig meldinger
    var nyLviktigNavn = meldinger.kinda_important[meldinger.kinda_important.length - 1].name
    var nyLviktigKontor = meldinger.kinda_important[meldinger.kinda_important.length - 1].office
    var nyLviktigTid = meldinger.kinda_important[meldinger.kinda_important.length - 1].time

    //Nyeste lite viktig meldinger
    var nyIkkeViktigNavn = meldinger.unimportant[meldinger.unimportant.length - 1].name
    var nyIkkeViktigKontor = meldinger.unimportant[meldinger.unimportant.length - 1].office
    var nyIkkeViktigTid = meldinger.unimportant[meldinger.unimportant.length - 1].time



    return (
      <>

        <div className="innhold">
          <div id="topp">
            <select className="knapp" id="filter_beskjeder">
              <option>Filter</option>
              <option id="important">Viktig</option>
              <option id="kinda_important">Litt viktig</option>
              <option id="unimportant">Ikke viktig</option>
            </select>
            <h1 id="overskrift">Beskjeder</h1>
            <button id="ny_beskjed" className="knapp" onClick={() => setAktivSide(NBikkeLoggetInn)}>Ny beskjed</button>
          </div>
          <hr id="strek"></hr>
          <div id="viktig" className="meldingboks">
            <div className="melding">
              <div className="topp_meldingboks">
                <h3 className="beskjed_tittel">tittel</h3>
                <div className="navn_og_kontor">
                  <p className="navn">{nyViktigNavn}</p>
                  <p>{nyViktigKontor}</p>
                </div>
                <p id="tid">{nyViktigTid}</p>
              </div>
              <p id="selve_beskjed">lorem ipsum sit dolor amet</p>
            </div>
          </div>
          <div id="litt_viktig" className="meldingboks">
            <div className="melding">
              <div className="topp_meldingboks">
                <h3 className="beskjed_tittel">tittel</h3>
                <div className="navn_og_kontor">
                  <p className="navn">{nyLviktigNavn}</p>
                  <p>{nyLviktigKontor}</p>
                </div>
                <p id="tid">{nyLviktigTid}</p>
              </div>
              <p id="selve_beskjed">lorem ipsum sit dolor amet</p>
            </div>

          </div>
          <div id="lite_viktig" className="meldingboks">
            <div className="melding">
              <div className="topp_meldingboks">
                <h3 className="beskjed_tittel">tittel</h3>
                <div className="navn_og_kontor">
                  <p className="navn">{nyIkkeViktigNavn}</p>
                  <p>{nyIkkeViktigKontor}</p>
                </div>
                <p id="tid">{nyIkkeViktigTid}</p>
              </div>
              <p id="selve_beskjed">lorem ipsum sit dolor amet</p>
            </div>

          </div>
        </div>
      </>


    );
  }

  const NBLoggetInn = () => {

    for (let i = 0; i < forfattere.length; i++) {
      var alleForfattere = forfattere[i].name;
      console.log(alleForfattere)
    }



    return (
      <>
        <div className="innhold">
          <div id="topp_innhold">
            <h1>Skriv ny beskjed</h1>
            <hr id="strek"></hr>
          </div>
          <form id="send_beskjed">
            <p>Skriv en ny beskjed til de andre.</p>
            <div id="lag_ny_beskjed_boks">
              <input className='tekst_input' placeholder='Overskrift/Tittel' type="text"></input>
            </div>
            <textarea id="tekstboks"></textarea>
            <input type="submit" className='knapp' value="Send beskjed"></input>
            <button className='knapp' onClick={() => setAktivSide(MsgBoard)}>Avrbyt</button>
          </form>
        </div>
      </>
    );
  }

  const NBikkeLoggetInn = () => {

    return (
      <>
        <div className="innhold">
          <h1>Vennligst logg inn eller registrer ny bruker</h1>
          <h3>Logg Inn</h3>
          <form id="logg_inn">
            <input className='tekst_input' id="navn" type="text" placeholder='Navn Navnesen'></input>
            <input className='tekst_input' id="passord" type="password" placeholder='Passord'></input>
            <input type="submit" id="logg_inn_knapp" className="knapp" value="Logg Inn" onClick={() => setAktivSide(NBLoggetInn)}></input>
          </form>
          <h3>Registrer Bruker</h3>
          <RegistrerBruker />
          <button className='knapp' onClick={() => setAktivSide(MsgBoard)}>Avrbyt</button>

        </div>
      </>
    )
  }
  const [aktivSide, setAktivSide] = useState(MsgBoard);
  const [loggetInn, setLoggetInn] = useState(NBikkeLoggetInn);

  return (
    <>
      {/* Bytter sider */}
      {aktivSide}
    </>
  );
}

export default App;
