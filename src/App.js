import React from "react";
import waveFront from "./img/wave-front.svg";
import waveBack from "./img/wave-back.svg";
import logo from "./img/logo.png";
import clouds from "./img/clouds1.svg";
import {ScoreBoard} from "./components/ScoreBoard";
import {GameGrid} from "./components/GameGrid";
import {HelpModal} from "./components/HelpModal";

function App() {
  return (
    <div className="main-container">
      <HelpModal />
      <div className="sun">
        <ScoreBoard />
      </div>
      <img className="clouds" alt="cloud sprite" src={clouds} />
      <div className="logo-container">
        <img className="logo" alt="animal memory logo" src={logo} />
        <div className="help-button" >?</div>
      </div>
      <div className="wave-front-container">
        <img className="wave" alt="wave-sprite" src={waveFront} />
      </div>
      <div className="wave-back-container">
        <img className="wave" alt="wave-sprite" src={waveBack} />
      </div>
      <GameGrid />
    </div>
  );
}

export default App;
