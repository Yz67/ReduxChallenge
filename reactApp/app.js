import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Container from './components/Container';
/* WHEN YOU ACTUALLY WRITE YOUR REDUCER, FIX THE 2 LINES BELOW */
import mainReducer from './reducers/mainReducer'; /*UNCOMMENT*/
// const mainReducer = (state = 5) => state; /*REMOVE*/

const store = createStore(mainReducer);

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root')
);
