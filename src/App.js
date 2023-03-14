import './App.css';

function App() {
  return (
    <>

      <div id="innhold">
        <div id="topp">
          <button id="filter" class="knapp">Filter</button>
          <h1 id="overskrift">Beskjeder</h1>
          <button id="ny_beskjed" class="knapp">Ny beskjed</button>
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

export default App;
