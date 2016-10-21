import React from 'react';
import Modal from 'react-modal';
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
    this.removeErrors = this.props.removeErrors.bind(this);
    this.openModal = this.openModal.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.state = {
      modalOpen: false,
      errors: this.props.errors,
      style: {
        content : {
          margin: '150px auto 0 auto',
          width: '350px',
          height: '115px',
          border: '1px solid red',
          background: '#DDA0DD'
        }, overlay: {

        }
      },
    }
  }

  onModalClose() {
    this.setState({modalOpen: false});
  }

  openModal() {
    this.setState({modalOpen: true});
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

        if (JSON.stringify(this.props.activeSquare) === JSON.stringify([i,j])) {
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
      <div>

        <ul className="board group">
          {arr}
        </ul>

        <Modal
          isOpen={Boolean(this.state.errors)}
          onRequestClose={this.removeErrors}
          style={this.state.style}
          >
          {this.props.errors}
        </Modal>

      </div>
    );
  }
}

export default Board;
