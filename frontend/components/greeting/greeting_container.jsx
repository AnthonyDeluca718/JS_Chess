import React from 'react';
import {connect} from 'react-redux';
import Greeting from './greeting';


const mapStateToProps = (state) => {
  return({
    currentPlayer: state.currentPlayer,
    gameOver: state.gameOver
  })
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return({
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
