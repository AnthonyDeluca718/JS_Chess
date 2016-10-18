import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={this.props.color + "-square"}/>
    );
  }
}

export default Square;
