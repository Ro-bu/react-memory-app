import React from "react";

function GameTile(props) {

    return (
        <div onClick={() => props.submitAnswer(props.id)} className="gametile">
            <img draggable="false" className="tile-image" src={props.src} />
        </div>
    )
}

export {GameTile};