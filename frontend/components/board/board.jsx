import React from 'react';
import Square from '../square/square';
import Piece from '../../../game/piece';


class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let arr = [];
    for(let i=0; i < 8; i++) {
      for (let j=0; j < 8; j++) {
        let color;
        if ((i+j) % 2 === 0) {
          color = "white";
        } else {
          color = "black";
        }
        arr.push(
          <Square color={color} key={8*i+j} pos={[i,j]} piece={this.props.board[i][j]}/>
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
