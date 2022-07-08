import React from "react";

function ScoreBoard (props) {

    return (
        <div className="scoreboard">
            <div className="score-container">
                <p>Current Score:</p>
                <span>{props.currentScore}</span>
            </div>
            <div className="score-container">
                <p>High Score:</p>
                <span>{props.highScore}</span>
            </div>
        </div>
    )
}

export {ScoreBoard};