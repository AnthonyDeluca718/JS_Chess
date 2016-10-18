import {combineReducers} from 'redux';

import BoardReducer from './board_reducer';

export default combineReducers({
  board: BoardReducer
});
