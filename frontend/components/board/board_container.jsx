import React from 'react';
import {connect} from 'react-redux';
import Board from './board';

const mapStateToProps = (state) => {
  return({
    board: state.board
  });
};


const mapDispatchToProps = function(dispatch, ownProps) {
  return({});
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
