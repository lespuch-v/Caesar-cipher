import React, { useState, useEffect } from "react";

export default function Encoding(props) {
  const [formData, setFormData] = useState({
    encodeNumber: "",
    textAreaInput: "",
  });
  const [encText, setEncText] = useState("");

  function handleChange(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleBack() {
    props.setIsON(true);
    props.setIsEncodeOn((prevValue) => !prevValue);
  }

  // Text encoding
  function encoding(text, encodeNumber) {
    const valueArr = [];
    const letterArr = [];

    for (let i = 0; i < text.length; i++) {
      let x = text[i];
      let y = x.charCodeAt(0);
      if (y === 32) {
        valueArr.push(y);
      } else {
        valueArr.push(y + parseInt(encodeNumber));
      }
    }

    for (let i = 0; i < valueArr.length; i++) {
      let z = String.fromCharCode(valueArr[i]);

      letterArr.push(z);
    }

    return letterArr.join("");
  }
  useEffect(() => {
    setEncText(encoding(formData.textAreaInput, formData.encodeNumber));
  });

  return (
    <div className="encode-container">
      <div className="btn-back">
        <i onClick={handleBack} className="fas fa-undo-alt"></i>
      </div>
      <h2><span className="encode--title">Encode</span> message:</h2>
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
            name="encodeNumber"
            value={formData.encodeNumber}
          />
        </label>
        <textarea
          onChange={handleChange}
          value={formData.textAreaInput}
          name="textAreaInput"
          placeholder="Message to encode!"
          cols="30"
          rows="10"
        />
      </form>
      <div className="message-container">
        <p>{encText}</p>
      </div>
    </div>
  );
}
