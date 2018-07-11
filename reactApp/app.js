import React from 'react';
import ReactDOM from 'react-dom';
import WeekContainer from './components/WeekContainer';
import mainReducer from './reducers/mainReducer';

import { createStore } from 'redux';
import { Provider } from 'react-redux';


const store = createStore(mainReducer);

ReactDOM.render(
  <Provider store={store}>
    <WeekContainer />
  </Provider>,
  document.getElementById('root')
);
