import React from "react";
import {GameTile} from "../components/GameTile";
import {data} from "../components/data";

function GameGrid() {
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
    let tileElements = shuffle(data);

    tileElements = data.map((animal) => {
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