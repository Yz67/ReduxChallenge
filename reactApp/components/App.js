import React from 'react';
import { connect } from 'react-redux';

const displayMessage =
  'The React Redux Boilerplate is running successfully!';

// class component


/* Equivalent function component! */
const App = ({}) => (
    <div>
        <p>{displayMessage}</p>
    </div>
);


/*
==========================================================
  This is what you do if you want this component or any
  other to become a connected "container" component!
==========================================================
//
// /* At bottom of file: */

// const mapStateToProps = (state) => ({
//    someStateProp: /* state.something typically */1
// });
//
// const mapDispatchToProps = (dispatch) => ({
//    someDispProp: /* some function that dispatches an action */1
// });

// App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
