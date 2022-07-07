import React from "react";
import {GameTile} from "../components/GameTile";
import {data} from "../components/data";

function GameGrid() {

    let tileElements = data.map((animal) => {
        return(
            <GameTile src={animal.src} id={animal.name} key={animal.name} />
        )
    })

    return (
        <div className="gamegrid">
            {tileElements}
        </div>
    )
}

export {GameGrid};