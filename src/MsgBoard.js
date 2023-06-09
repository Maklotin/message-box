import './App'
import './App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { db } from './firebase';
import { ref, onValue, off } from "firebase/database"
import { v1 as uuidv1 } from 'uuid';



const MsgBoard = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = ref(db);
    onValue(messagesRef, (snapshot) => {
      const messagesObject = snapshot.val();
      if (messagesObject) {
        const messagesList = Object.keys(messagesObject)
          .map((key) => ({ ...messagesObject[key], uuid: key }))
          .sort((a, b) => a.timestamp - b.timestamp);
        setMessages(messagesList);
      }
    });
    return () => off(messagesRef);
  }, []);

  return (
    <>
      <div className="innhold">
        <div id="topp_innhold">
          <h1>Beskjeder</h1>
          <hr id="strek"></hr>
        </div>
        <div id="beskjeder">
          {messages.slice(0).reverse().map((message) => (
            <div key={message.uuid}>
              <div id={message.merke} className="meldingboks">
                <div className="melding">
                  <div className="topp_meldingboks">
                    <h3 className="beskjed_tittel">{message.tittel}</h3>
                    <div className="navn_og_kontor">
                      <p className="navn">Skrevet av: {message.forfatter}</p>
                      <p>Kontor: {message.kontor}</p>
                    </div>
                  </div>
                  <p id="selve_beskjed">{message.innhold}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );

}

export default MsgBoard;