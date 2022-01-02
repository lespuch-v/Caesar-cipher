import React, { useState } from "react";
import imgCipher from "./images/cipher.png"
import "./App.css";
import Encoding from "./components/encoding";
import Decoding from "./components/decoding";


function App() {
  const [isEncodeOn, setIsEncodeOn] = useState(false);
  const [isDecodeOn, setIsDecodeOn] = useState(false);
  const [isOn, setIsON] = useState(true);
  const [sequenceShift, setSequenceShift] = useState(0);

  function handleClick(e) {
    const id = e.target.id;
    if (id === "1") {
      setIsEncodeOn((prevValue) => !prevValue);
      setIsON(false);
    } else if (id === "2") {
      setIsDecodeOn((prevValue) => !prevValue);
      setIsON(false);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {isEncodeOn ? (
          <Encoding
            handleClick={handleClick}
            sequenceShift={sequenceShift}
            setIsEncodeOn={setIsEncodeOn}
            setIsON={setIsON}
          />
        ) : null}
        {isDecodeOn ? (
          <Decoding
            handleClick={handleClick}
            sequenceShift={sequenceShift}
            setIsDecodeOn={setIsDecodeOn}
            setIsON={setIsON}
          />
        ) : null}
        {isOn ? (
          <div className="start-container">
            <h2>Welcome!</h2>
            <h4>to</h4>
            <h1>Caesar cipher</h1>
            <img src={imgCipher} alt="" width="200px" />
            <section>
            <button id="1" onClick={handleClick} className="btn-cipher">
              Encode
            </button>
            <button id="2" onClick={handleClick} className="btn-cipher">
              Decode
            </button>
            </section>
          </div>
        ) : null}
      {isOn ? <small className="small-text"><a href="https://en.wikipedia.org/wiki/Caesar_cipher">Caesar cipher - WIKI</a></small>: null}
      </header>
    </div>
  );
}

export default App;
