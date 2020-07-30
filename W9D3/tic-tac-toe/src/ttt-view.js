class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard(); 
    this.bindEvents();                                                                   
  }

  bindEvents() {
    $("ul").on('click', (e) => { 
      let cell = $(e.target);
      this.makeMove(cell);
    })
  }

  makeMove($square) {
    let pos = $square.data("pos");
    this.game.playMove(pos);

    let mark = this.game.currentPlayer;
    $square.addClass(mark);
    $square.text(mark);
  
    if (this.game.isOver()) {
      let winner = this.game.winner();

      if (winner = 'x') {
        $('.x').addClass('winner');
        $('.o').addClass('loser');
      } else {
        $('.o').addClass('winner');
        $('.x').addClass('loser');
      }

      alert(`Congrats!`);
    }
  }

  setupBoard() {
    const grid = $('<ul></ul>');
    grid.addClass('grid');

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let cell = $('<li></li>')
        cell.data("pos", [i, j]);
        grid.append(cell);
      }
    }

    this.$el.append(grid);                   
  }
}

module.exports = View;
