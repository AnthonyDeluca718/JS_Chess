import merge from 'lodash/merge';

let _emptyBoard = Array(8);
for(let i=0; i< 8; i++) {
  _emptyBoard[i] = Array(8);
}

const BoardReducer = function(state = _emptyBoard, action) {
  switch(action.type) {
    default:
      return state;
  }
}

export default BoardReducer;
