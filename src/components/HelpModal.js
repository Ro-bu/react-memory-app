import React from "react";

function HelpModal() {

    return (
        <div className="modal-container">
            <div className="modal">
                <div className="close-modal">X</div>
                <h3 className="modal-title">How to play</h3>
                <p className="modal-text">The object of the game is to click on tiles without repeating the same animal. After each click the board is shuffled and you have to remember the animals you have already clicked.</p>
            </div>
        </div>
    )
}

export {HelpModal};