import React from "react";
import {GameTile} from "../components/GameTile";
import {nanoid} from "nanoid";


function GameGrid(props) {

    let tileElements = props.data.map((animal) => {
        return(
            <GameTile
                src={animal.src} id={animal.name} key={nanoid()} submitAnswer={props.submitAnswer} />
        )
    })

    return (
        <div className="gamegrid">
            {tileElements}
        </div>
    )
}

export {GameGrid};