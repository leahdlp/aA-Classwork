//constructor
function HumanPlayer(){
  this.color = "black";
};
//playturn
// let rlInterface;

HumanPlayer.prototype.pickAColor = function (rlInterface) {
    debugger
    rlInterface.question(
        'What color do you want to be?',
        handleResponse.bind(this)
    );

    function handleResponse(answer) {
        console.log(typeof answer);
        const color = answer;
        if (color != 'white' && color != 'black') {
            console.log("Invalid color!");
            this.pickAColor(callback);
            return;
        }
        //console.log('after handleResponse')
        this.color = color;
      }
}

module.exports = HumanPlayer;