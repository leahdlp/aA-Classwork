import React from "react";
import Board from './board';
import * as Minesweep from "./../../minesweeper";

class Game extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            board: new Minesweep.Board(9, 10)
        }
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame (tile, flagged) {
        if (flagged) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }

        this.setState({ board: this.state.board });
    }

    render () {
        return (
            <div>
                <Board board={this.state.board} updateGame={this.updateGame} />
            </div>
        )
    }
}

export default Game;