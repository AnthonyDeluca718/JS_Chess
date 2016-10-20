import React from 'react';
import Square from '../square/square';
import Piece from '../../piece';

Array.prototype.has = function(el) {
  let stringEl = JSON.stringify(el);

  for(let i=0; i< this.length; i++) {
    if(JSON.stringify(this[i]) === stringEl) {
      return true;
    }
  }

  return false;
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.createDispatch = this.createDispatch.bind(this);
  }

  createDispatch(i,j) {
    return (
      () => this.props.sendPosition([i,j])
    )
  }

  render() {
    let arr = [];
    for(let i=0; i < 8; i++) {
      for (let j=0; j < 8; j++) {
        let color, active;
        if ((i+j) % 2 === 0) {
          color = "white";
        } else {
          color = "black";
        }

        if (this.props.activeSquares.has([i,j]) ) {
          active = "active";
        } else {
          active = "";
        }
        arr.push(
          <Square
            color={color}
            key={8*i+j}
            pos={[i,j]}
            piece={this.props.board[i][j]}
            dispatch={ this.createDispatch(i,j) }
            active={active}
          />
        )
      }
    }

    return(
      <ul className="board group">
        {arr}
      </ul>
    );
  }
}

export default Board;
