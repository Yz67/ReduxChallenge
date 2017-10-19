import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import SchedulerApp from './components/SchedulerApp';
/* WHEN YOU ACTUALLY WRITE YOUR REDUCER, FIX THE 2 LINES BELOW */
import mainReducer from './reducers/mainReducer'; /*UNCOMMENT*/

const store = createStore(mainReducer);

ReactDOM.render(
  <Provider store={store}>
    <SchedulerApp />
  </Provider>,
  document.getElementById('root')
);
