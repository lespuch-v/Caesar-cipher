import React, { useState } from "react";

export default function Decoding(props) {

  // Declaring state variables. 
  const [formData, setFormData] = React.useState({
    DecodeNumber: 0,
    textAreaInput: "",
  });
  const [decText, decEncText] = useState("");

  // Getting and Checking input from the form 
  function handleChange(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  // Decoding function that decodes TEXT 
  function DeCod(text, encodeNumber) {
    const valueArr = [];
    const letterArr = [];

    for (let i = 0; i < text.length; i++) {
      let x = text[i];
      let y = x.charCodeAt(0);
      if (y === 32) {
        valueArr.push(y);
      } else {
        valueArr.push(y - parseInt(encodeNumber));
      }
    }

    for (let i = 0; i < valueArr.length; i++) {
      let z = String.fromCharCode(valueArr[i]);
      letterArr.push(z);
    }

    return letterArr.join("");
  }

  // Checking changes in the box
  function DecodeEncodedText(){
    decEncText(DeCod(formData.textAreaInput, formData.DecodeNumber))
  }

  function handleBack() {
    props.setIsON(true);
    props.setIsDecodeOn((prevValue) => !prevValue);
  }

  return (
    <div className="encode-container">
      <div className="btn-back">
      <i onClick={handleBack} className="fas fa-undo-alt"></i>
      </div>
      <h2><span className="decode--title">Decode</span> message:</h2>
      <form className="encode-form">
        <label>
        <div class="tooltip">Secret number:
          <span className="tooltiptext">Chose a number from 1 to infinity and beyond!</span>
          </div>
      <input
          className="secret-number"
          type="number"
          placeholder="ENC"
          onChange={handleChange}
          name="DecodeNumber"
          value={formData.DecodeNumber}
        />
        </label>
        <textarea
          onChange={handleChange}
          value={formData.textAreaInput}
          placeholder="Encoded message!"
          name="textAreaInput"
          cols="30"
          rows="10"
        />
      </form>
      <div className="message-container">
      <p>{decText}</p>
      </div>
      <button className="decoding-btn" onClick={DecodeEncodedText} >Decode</button>
    </div>
  );
}
