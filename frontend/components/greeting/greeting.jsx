import React from 'react';

// {"Checkmate. " + (this.props.currentPlayer==="white" ? "Black" : "White") + " wins!"}
class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let gameOver = this.props.gameOver;
    if (gameOver) {
      let message;
      switch (gameOver) {
        case "check":

        case "checkmate":


        case "stalemate":

      }

      return(
        <div className="greeting" >
          {this.props.gameOver}
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
