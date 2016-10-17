import { createStore } from 'redux';
import Reducer from './reducer';

const middleWare = ()=>{
  return ({});
}

const Store = (preloadedState = {}) => (
  createStore(
    Reducer,
    preloadedState,
    middleWare
  )
);

export default Store;
