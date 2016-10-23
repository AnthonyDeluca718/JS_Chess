import React from 'react';

// {"Checkmate. " + (this.props.currentPlayer==="white" ? "Black" : "White") + " wins!"}
class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let gameOver = this.props.gameOver;
    if (gameOver === "stalemate") {
      return(
        <div className="greeting" >
          Stalemate. Tie Game.
        </div>
      )
    } else if(gameOver == "stalemate"){
      return (
        <div className="greeting" >
          {"Checkmate. " + (this.props.currentPlayer==="white" ? "White" : "Black") + " wins."}
        </div>
      )
    } else {
      return(
        <div className="greeting" >
          {"Current Player: " + (this.props.currentPlayer==="white" ? "White" : "Black")}
        </div>
      )
    }
  }
}

export default Greeting;
