import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.color === "white") {
      return(
        <div className="white-square"/>
      );
    } else {
      return (
        <div className="black-square" />
      );
    }
  }
}

export default Square;
