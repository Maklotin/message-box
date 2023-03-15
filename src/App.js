import './App.css';
import { useState } from 'react';
import meldinger from './meldinger.json';
import forfattere from './folk.json'



const App = () => {
  const [aktivSide, setAktivSide] = useState("MsgBoard");
  const [loggetInn, setLoggetInn] = useState("NBLoggetInn");


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
            <select class="knapp" id="filter_beskjeder">
              <option>Filter</option>
              <option id="important">viktig</option>
              <option id="kinda_important">litt viktig</option>
              <option id="unimportant">ikke viktig</option>
            </select>
            <h1 id="overskrift">Beskjeder</h1>
            <button id="ny_beskjed" class="knapp" onClick={() => setAktivSide("NyBeskjed")}>Ny beskjed</button>
          </div>
          <hr id="strek"></hr>
          <div id="viktig" class="meldingboks">
            <div class="melding">
              <div class="topp_meldingboks">
                <h3 class="beskjed_tittel">tittel</h3>
                <div class="navn_og_kontor">
                  <p class="navn">{nyViktigNavn}</p>
                  <p>{nyViktigKontor}</p>
                </div>
                <p id="tid">{nyViktigTid}</p>
              </div>
              <p id="selve_beskjed">lorem ipsum sit dolor amet</p>
            </div>
          </div>
          <div id="litt_viktig" class="meldingboks">
            <div class="melding">
              <div class="topp_meldingboks">
                <h3 class="beskjed_tittel">tittel</h3>
                <div class="navn_og_kontor">
                  <p class="navn">{nyLviktigNavn}</p>
                  <p>{nyLviktigKontor}</p>
                </div>
                <p id="tid">{nyLviktigTid}</p>
              </div>
              <p id="selve_beskjed">lorem ipsum sit dolor amet</p>
            </div>

          </div>
          <div id="lite_viktig" class="meldingboks">
            <div class="melding">
              <div class="topp_meldingboks">
                <h3 class="beskjed_tittel">tittel</h3>
                <div class="navn_og_kontor">
                  <p class="navn">{nyIkkeViktigNavn}</p>
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
          <p>Skriv en ny beskjed til de andre.</p>
          <div id="lag_ny_beskjed_boks">
            <input type="text"></input>
          </div>
          <textarea id="tekstboks"></textarea>
        </div>
      </>
    );
  }

  const NBikkeLoggetInn = () => {
    return (
      <>
      <div className="innhold">
        <h1>Vennligst logg inn eller registrer ny bruker</h1>
      </div>
      </>
    )
  }

  return (
    <>
      {/* Bytter sider */}
      {aktivSide === 'MsgBoard' ? <MsgBoard /> : <NBikkeLoggetInn /> ? loggetInn === "NBLoggetInn" : <NBLoggetInn />}
    </>
  );
}

export default App;
