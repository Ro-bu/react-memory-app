import React from "react";
import waveFront from "./img/wave-front.svg";
import waveBack from "./img/wave-back.svg";
import logo from "./img/logo.png";
import clouds from "./img/clouds1.svg";
import {ScoreBoard} from "./components/ScoreBoard";
import {GameGrid} from "./components/GameGrid";
import {HelpModal} from "./components/HelpModal";
import {data} from "./components/data";

function App() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [score, setScore] = React.useState({currentScore: 0, highScore: 0});
  const [answerArray, setAnswerArray] = React.useState([]);
  const [tileData, setTileData] = React.useState([]);

  // Fisher-Yates array shuffle
  function shuffle(array) {
    let m = array.length, t, i;
    while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
    }
    return array;
  }


  function shuffleTiles() {
    setTileData([...shuffle(data)])
  };

  React.useEffect(() => {
    shuffleTiles()
  }, [score]);

  function openCloseModal() {
    setModalOpen((prev) => !prev);
  }
  function addScore() {
    if(score.currentScore + 1 > score.highScore) {
      setScore(prev => {
        return ({
          currentScore: prev.currentScore+1,
          highScore: prev.currentScore+1
        })
      })
    } else {
      setScore(prev => {
        return({
          ...prev,
          currentScore: prev.currentScore+1
        })
      })
    }
  }

  function submitAnswer(ans) {
    if(!answerArray.includes(ans)) {
      setAnswerArray((prev) => {
        return [...prev, ans];
      })
      addScore();
    } else {
      setScore(prev => {
        return({
          ...prev,
          currentScore: 0
        })
      })
      setAnswerArray([]);
    }
  }
  // function checkForHighScore() {
  //   if(currentScore > highScore) {
  //     setHighScore(currentScore);
  //   }
  // }


  return (
    <div className="main-container">
      <HelpModal modalOpen={modalOpen} openCloseModal={openCloseModal}  />
      <div className="sun">
        <ScoreBoard score={score} />
      </div>
      <img className="clouds" alt="cloud sprite" src={clouds} />
      <div className="logo-container">
        <img className="logo" alt="animal memory logo" src={logo} />
        <div onClick={openCloseModal} className="help-button" >?</div>
      </div>
      <div className="wave-front-container">
        <img className="wave" alt="wave-sprite" src={waveFront} />
      </div>
      <div className="wave-back-container">
        <img className="wave" alt="wave-sprite" src={waveBack} />
      </div>
      <GameGrid submitAnswer={submitAnswer} data={tileData} />
    </div>
  );
}

export default App;
