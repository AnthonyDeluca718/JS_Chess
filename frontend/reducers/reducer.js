import merge from 'lodash/merge';
import Piece from '../../game/piece';

const Reducer = function(state, action) {
  switch(action.type) {
    case "RECEIVE_POSITION":
      console.log(action.pos);
      return state;
    default:
      return state;
  }
}

module.exports = Reducer;
