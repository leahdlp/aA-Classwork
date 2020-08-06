import React from "react";

class Tile extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     isRevealed: false,
        //     isBombed: false,
        //     isFlagged: false
        // }

        this.handleClick = this.handleClick.bind(this);
    }

    // flipTile(event) {
    //     const = board = 
    //     let tileFace = 'T';

    //     if (this.state.isBombed === true) {
    //         tileFace = 'B';
    //     } else if (this.state.isFlagged === true) {
    //         tileFace = 'F';
    //     } else if (this.state.revealed === true) {
    //         tileFace = ;
    //     }

    //     return tileFace;
    // }

    // reveal(event) {
    //     this.setState({isRevealed: true}, this.flipTile);

    // }

    // bomb(event) {
    //     this.setState({isBombed: true}, this.flipTile);
    // }

    // flag(event) {
    //     this.setState({isFlagged: true}, this.flipTile);
    // }

    handleClick (event) {
        let flagged;

        if (event.altKey) {
            flagged = true;
        } else {
            flagged = false;
        }

        this.props.updateGame(this.props.tile, flagged)
    }

    render () {
        const tile = this.props.tile;
        let cklass;
        let bombCount;
        let tileFace = "T";

        if (tile.explored) {
            if (!tile.bombed) {
                cklass = 'revealed';
                bombCount = tile.adjacentBombCount();
                tileFace = bombCount ? bombCount : '';
            } else {
                cklass = 'bombed';
                bombCount = tile.adjacentBombCount();
                tileFace = '\u2622';
            }
        } else if (tile.flagged) {
            cklass = 'flagged';
            tileFace = '\u2691';
        } else {
            cklass = 'notExplored';
        }

        cklass = `tile-${cklass}`


        return (
            <div className={cklass} onClick={this.handleClick}>{tileFace}</div>
        )
    }
}

export default Tile;