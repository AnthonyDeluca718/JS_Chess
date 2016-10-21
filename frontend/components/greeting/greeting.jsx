import React from 'react';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.checkmate) {
      return(
        <div className="greeting" >
          {"Checkmate. " + (this.props.currentPlayer==="white" ? "Black" : "White") + " wins!"}
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
