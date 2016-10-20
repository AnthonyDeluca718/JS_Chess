import React from 'react';
import {connect} from 'react-redux';
import Greeting from './greeting';


const mapStateToProps = (state) => {
  return({
    currentPlayer: state.currentPlayer,
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
