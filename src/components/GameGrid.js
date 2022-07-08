import React from "react";
import {GameTile} from "../components/GameTile";


function GameGrid(props) {

    let tileElements = props.data.map((animal) => {
        return(
            <GameTile
                src={animal.src} id={animal.name} key={animal.name} submitAnswer={props.submitAnswer} />
        )
    })

    return (
        <div className="gamegrid">
            {tileElements}
        </div>
    )
}

export {GameGrid};