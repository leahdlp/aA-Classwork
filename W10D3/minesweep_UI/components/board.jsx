import React from 'react';
import Tile from './tile';

const Board = (props) => {
    const board = props.board;
    return (
        <div id='board'>
             {board.grid.map((row, i) => {
                return (
                    <div className='row' key={`row-${i}`}>
                        {row.map((tile, index) => {
                            return (
                                <Tile 
                                    tile={tile} 
                                    updateGame={props.updateGame}
                                    key={(i * board.gridSize) + index}
                                />
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Board;