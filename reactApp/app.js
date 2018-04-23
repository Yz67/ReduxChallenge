import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CalApp from './components/App';
/* WHEN YOU ACTUALLY WRITE YOUR REDUCER, FIX THE 2 LINES BELOW */
import reducer from './reducers/index';
// import mainReducer from './reducers/mainReducer'; /*UNCOMMENT*/
// const mainReducer = (state = 5) => state; /*REMOVE*/

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <CalApp />
  </Provider>,
  document.getElementById('root')
);
