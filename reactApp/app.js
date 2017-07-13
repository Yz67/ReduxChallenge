import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
/* WHEN YOU ACTUALLY WRITE YOUR REDUCER, FIX THE 2 LINES BELOW */
// import mainReducer from './reducers/mainReducer'; /*UNCOMMENT*/
const mainReducer = (state = 5) => state; /*REMOVE*/

const store = createStore(mainReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// THOUGHT HAD TO CHANGE ABOVE TO ALL OF THIS AND ADD ROOTDEV.JS BUT THINK DIDN'T ACTUALLY HAVE TO DO ANY OF THAT

// import React from 'react';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import App from './components/App';
// import Root from './containers/Root.dev';
// import { render } from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
// import { configureStore, history } from './store/configureStore';

// /* WHEN YOU ACTUALLY WRITE YOUR REDUCER, FIX THE 2 LINES BELOW */
// // import mainReducer from './reducers/mainReducer'; /*UNCOMMENT*/
// const mainReducer = (state = 5) => state; /*REMOVE*/

// const store = createStore(mainReducer);

// render(
//     <AppContainer>
//         <Root store={store} history={history} />
//     </AppContainer>,
//     document.getElementById('root')
// );

// if (module.hot) {
//     module.hot.accept('./containers/Root', () => {
//         const newConfigureStore = require('./store/configureStore');
//         const newStore = newConfigureStore.configureStore();
//         const newHistory = newConfigureStore.history;
//         const NewRoot = require('./containers/Root').default;
//         render(
//             <AppContainer>
//                 <NewRoot store={newStore} history={newHistory} />
//             </AppContainer>,
//             document.getElementById('root')
//         );
//     });
// }
