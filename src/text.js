import React, { useState } from "react";

const Text = (props) => {
  //   text;="new text"
  const handeUpClick = () => {
    console.log("touppser Case" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };    
  const handelOnChange = (event) => {
    console.log("touppser Case");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          onChange={handelOnChange}
          placeholder="Enter text hear"
          value={text}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handeUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
};

export default Text;
