import React from 'react';
import {connect} from 'react-redux';
import Reset from './reset';

const mapStateToProps = (state) => {
  return({
  })
};


const mapDispatchToProps = function(dispatch, ownProps) {
  return({
    resetGame: () => dispatch({
      type: "RESET_GAME",
    }),
    randGame: () => dispatch({
      type: "RANDOM_GAME",
    })
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reset);
