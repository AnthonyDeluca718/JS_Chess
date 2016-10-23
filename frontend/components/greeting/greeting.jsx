import React from 'react';

// {"Checkmate. " + (this.props.currentPlayer==="white" ? "Black" : "White") + " wins!"}
class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.gameOver) {
      return(
        <div className="greeting" >
          {this.props.gameOver}
        </div>
      )
    } else {
      let otherPlayer
      return(
        <div className="greeting" >
          {"Current Player: " + (this.props.currentPlayer==="white" ? "White" : "Black")}
        </div>
      )
    }
  }
}

export default Greeting;
