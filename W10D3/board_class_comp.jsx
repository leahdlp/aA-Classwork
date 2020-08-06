class Board extends React.Component {
    constructor (props) {
        super(props);
        this.renderRows = this.renderRows.bind(this);
        this.renderTile = this.renderTile.bind(this);
    }

    render () {
        const board = this.props.board;

        return (
            <div>
                {this.renderRows()}       
            </div>
        )
    }

    renderRows () {
        const board = this.props.board;

        return board.grid.map((row, i) => {
            return (
            <div key={`row-${i}`}>
                {this.renderTile(row, i)}
            </div>
            )
        })
    }

    renderTile (row, i) {
        return row.map((tile, j) => {
            return (
                <Tile
                    tile={tile}
                    updateGame={this.props.updateGame}
                    key={(i * this.props.board.gridSize) + j}
                />
            )
        });
    }
}