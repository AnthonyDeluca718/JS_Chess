import React from 'react';

class Reset extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="reset-button" onClick={this.props.resetGame}>
        Reset Game
      </div>

    )
  }
}

export default Reset ;
