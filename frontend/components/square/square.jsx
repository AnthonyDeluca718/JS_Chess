import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.color === "white") {
      return(
        <li className="white-square"/>
      );
    } else {
      return (
        <li className="black-square"/>
      );
    }
  }
}

export default Square;
