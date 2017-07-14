
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Scheduler from './containers/Scheduler';
/* WHEN YOU ACTUALLY WRITE YOUR REDUCER, FIX THE 2 LINES BELOW */
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Scheduler />
    </Provider>,
    document.getElementById('root')
);
