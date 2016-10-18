import React from 'react';
import BoardContainer from './board/board_container';
import { Provider } from 'react-redux';

const Root = ({store}) => {
  return(
    <Provider store={store}>
      <BoardContainer />
    </Provider >
  )
}

export default Root;
