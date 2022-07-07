import React from "react";

function ScoreBoard () {

    return (
        <div className="scoreboard">
            <div className="score-container">
                <p>Current Score:</p>
                <span>0</span>
            </div>
            <div className="score-container">
                <p>High Score:</p>
                <span>0</span>
            </div>
        </div>
    )
}

export {ScoreBoard};