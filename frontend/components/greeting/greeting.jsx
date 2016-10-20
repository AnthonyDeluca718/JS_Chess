import React from 'react';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="greeting" >
        {"Current Player: " + this.props.currentPlayer}
        <br/>
        {"checkmate: " + this.props.checkmate}

      </div>
    )
  }
}

export default Greeting;
