import React from 'react';
import {connect} from 'react-redux';
import Board from './board';

const mapStateToProps = (state) => {
  return({
    board: state.chessBoard.board,
    currentPlayer: state.currentPlayer,
    activeSquares: state.activeSquares
  })
};


const mapDispatchToProps = function(dispatch, ownProps) {
  return({
    sendPosition: (pos) => dispatch({
      type: "RECEIVE_POSITION",
      pos: pos
    })
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
