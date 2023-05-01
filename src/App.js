import './App.css';
import React, { useState } from 'react';
import SkrivNyBeskjed from './SkrivNyBeskjed';
import MsgBoard from './MsgBoard';

const App = () => {
  const [aktivSide, setAktivSide] = useState(<MsgBoard />);
  

  return (
    <>
      <div id="topp_meny">
        <button className='knapp' onClick={() => setAktivSide(<MsgBoard />)}>Beskjeder</button>
        <button className='knapp' onClick={() => setAktivSide(<SkrivNyBeskjed />)}>Ny Beskjed</button>
      </div>
      {aktivSide}
    </>
  );
};

export default App;
