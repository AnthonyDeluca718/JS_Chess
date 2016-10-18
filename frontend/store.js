import { createStore } from 'redux';
import RootReducer from './reducers/root_reducer';

const middleWare = ()=>{
  return ({});
}

const Store = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState
  )
);

export default Store;
