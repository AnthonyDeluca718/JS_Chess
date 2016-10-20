import React from 'react';
import {connect} from 'react-redux';
import Greeting from './greeting';


const mapStateToProps = (state) => {
  return({
    currentPlayer: state.currentPlayer,
    checkmate: state.checkmate
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
