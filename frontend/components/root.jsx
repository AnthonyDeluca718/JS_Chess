import React from 'react';
import BoardContainer from './board/board_container';
import GreetingContainer from './greeting/greeting_container';
import { Provider } from 'react-redux';

const Root = ({store}) => {
  return(
    <Provider store={store}>
      <div>    
        <GreetingContainer />
        <BoardContainer />
      </div>
    </Provider >
  )
}

export default Root;
