import './App.css';
import { useState } from 'react';
//import meldinger from 'meldinger.json';




const App = () => {
  const [aktivSide, setAktivSide] = useState("MsgBoard");


  const MsgBoard = () => {
    return (
      <>

        <div id="innhold">
          <div id="topp">
            <button id="filter" class="knapp">Filter</button>
            <h1 id="overskrift">Beskjeder</h1>
            <button id="ny_beskjed" class="knapp" onClick={() => setAktivSide("NyBeskjed")}>Ny beskjed</button>
          </div>
          <hr id="strek"></hr>
          <div id="viktig" class="meldingboks">
            <div class="melding">

            </div>
          </div>
          <div id="litt_viktig" class="meldingboks">
            <div class="melding">

            </div>

          </div>
          <div id="lite_viktig" class="meldingboks">
            <div class="melding">

            </div>

          </div>
        </div>
      </>


    );
  }

  const NyBeskjed = () => {
    return (
      <>
      <h1>Ny beskjed</h1>
      </>
    );
  }

  return (
    <>
      {aktivSide === 'MsgBoard' ? <MsgBoard /> : <NyBeskjed />}
    </>
  );
}

export default App;
