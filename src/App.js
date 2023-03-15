import './App.css';
import { useState } from 'react';
import meldinger from './meldinger.json';
import forfattere from './folk.json'



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
          <form id="registrer_bruker">
            <input className='tekst_input' id="ny_navn" type="text" placeholder='Navn Navnesen'></input>
            <input className='tekst_input' id="ny_passord" type="password" placeholder='Passord'></input>
            <input className='tekst_input' id="ny_kontor" type="text" placeholder='Kontor (By, Land)'></input>
            <input type="submit" id="reg_bruker_knapp" className="knapp" value="Registrer Bruker"></input>
          </form>

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
