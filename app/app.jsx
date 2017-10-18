/*
    app/app.js
    Wraps <App /> in Provider and creates the Redux store
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './presentational/app';

const Main = () => (
    <Provider>
        <App />
    </Provider>
);

ReactDOM.render(<Main />, document.getElementById('root'));
