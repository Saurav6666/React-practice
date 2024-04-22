import React, { useState } from "react";

const Firstbtn = () => {
  const [show, setShow] = useState(false);
  const [textcolor, setColor] = useState("black");
  const [bgcolor, setbgColor] = useState("pink");


  const showContent = () => {
    setShow(!show);
  };

  const changeColor = () => {
    setColor(textcolor === "black" ? "green" : "black");
  };
  const changebgColor = () => {
    setbgColor(bgcolor === "pink" ? "green" : "pink");
  };

  const changeColorV2 = () => {
    setColor("black");
    setColor("blue");
    setColor("red");
  };
  return (
    <div>
      <button onClick={showContent}>
        {show === true ? "Hide" : "Show more"}
      </button>
      {show === true ? <h1> Hi Saurav Kanojia</h1> : null}
      <br />

      <button onClick={changeColor}>
        {textcolor === "black" ? "changeColor" : "Color Changed"}
      </button>


      <button onClick={changeColorV2}>Change Multiple</button>
      {<h1 style={{ color: textcolor }}> I am {textcolor}</h1>}


      <button onClick={changebgColor}>
        {bgcolor === "pink" ? "changeColor" : "BackGround Changed"}
      </button>
      {<h1 style={{ backgroundColor: bgcolor }}> I am {bgcolor}</h1>}
    </div>
  );
};

export default Firstbtn;
