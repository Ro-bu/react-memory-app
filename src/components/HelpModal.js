import React from "react";

function HelpModal(props) {

    return (
        <div className={props.modalOpen ? "modal-container" : "modal-container hidden"} onClick={() => props.openCloseModal()}>
            <div className="modal opened" onClick={e => e.stopPropagation()}>
                <div onClick={() => {
                    props.openCloseModal()
                }} className="close-modal">X</div>
                <h3 className="modal-title">How to play</h3>
                <p className="modal-text">The object of the game is to click on tiles without repeating the same tile. After each click the board is shuffled and you have to remember the animals you have already clicked.</p>
            </div>
        </div>
    )
}

export {HelpModal};