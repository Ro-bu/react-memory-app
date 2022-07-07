import React from "react";

function GameTile(props) {

    return (
        <div className="gametile">
            <img className="tile-image" src={props.src} />
        </div>
    )
}

export {GameTile};