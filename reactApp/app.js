import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers/index';
/* WHEN YOU ACTUALLY WRITE YOUR REDUCER, FIX THE 2 LINES BELOW */
// import mainReducer from './reducers/mainReducer'; /*UNCOMMENT*/

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
