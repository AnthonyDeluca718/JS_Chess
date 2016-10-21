import React from 'react';
import {connect} from 'react-redux';
import Board from './board';

const mapStateToProps = (state) => {
  return({
    board: state.chessBoard.board,
    currentPlayer: state.currentPlayer,
    activeSquare: state.activeSquare,
    errors: state.errors
  })
};


const mapDispatchToProps = function(dispatch, ownProps) {
  return({
    sendPosition: (pos) => dispatch({
      type: "RECEIVE_POSITION",
      pos: pos
    }),
    removeErrors: () => dispatch({
      type: "REMOVE_ERRORS"
    })
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
