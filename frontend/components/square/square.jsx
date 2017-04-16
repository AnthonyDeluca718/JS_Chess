import React from 'react';

const utfHash = {
  "white pawn": 9817,
  "white rook": 9814,
  "white knight": 9816,
  "white bishop": 9815,
  "white king": 9812,
  "white queen": 9813,
  "black pawn": 9823,
  "black rook": 9820,
  "black knight": 9822,
  "black bishop": 9821,
  "black king": 9818,
  "black queen": 9819
};

//Square receive the piece to display, its color and whether the square is selected
class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let active = this.props.active;
    if (this.props.piece){
      return (
        <li className={this.props.color + "-square " + active} onClick={this.props.dispatch}>
          {String.fromCharCode(utfHash[this.props.piece.color + " " + this.props.piece.type])}
        </li>
      );
    } else {
      return(
        <li className={this.props.color + "-square " + active}>
        </li>
      )
    }
  }
}

export default Square;
