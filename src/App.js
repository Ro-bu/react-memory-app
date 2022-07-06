import React from "react";
import waveFront from "./img/wave-front.svg";
import waveBack from "./img/wave-back.svg";
import logo from "./img/logo.png";
import clouds from "./img/clouds1.svg";

function App() {
  return (
    <div className="main-container">
      <div className="sun">

      </div>
      <img className="clouds" src={clouds} />
      <img className="logo" src={logo} />
      <div className="wave-front-container">
        <img className="wave" src={waveFront} />
      </div>
      <div className="wave-back-container">
        <img className="wave" src={waveBack} />
      </div>
    </div>
  );
}

export default App;
