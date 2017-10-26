import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import Game from './components/Game';
/* WHEN YOU ACTUALLY WRITE YOUR REDUCER, FIX THE 2 LINES BELOW */
// import mainReducer from './reducers/mainReducer'; /*UNCOMMENT*/
// const mainReducer = (state = 5) => state; /*REMOVE*/

// const store = createStore(mainReducer);

ReactDOM.render(
  // <Provider store={store}>
    <Game />,
  // </Provider>,
  document.getElementById('root')
);
