import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let content;
    if (!this.props.piece) {
      content = "&#9813";
    } else {
      content = "";
    }

    return (
      <li className={this.props.color + "-square"}>
        {String.fromCharCode(9818)}
      </li>
    );
  }
}

export default Square;
