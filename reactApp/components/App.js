import React from 'react';
import TimeContainer from './TimeContainer';
import Day from './Day';
const displayMessage =
  'The React Redux Boilerplate is running successfully!';

// class component
class App extends React.Component {
  render() {
    return (
      <div id="main">
        <div id="header">
          Header
        </div>
        <div id="calendar">
          <TimeContainer />
          <Day/>
          <Day/>
          <Day/>
          <Day/>
          <Day/>
          <Day/>
          <Day/>
        </div>
      </div>
    );
  }
};

/* Equivalent function component! */
// const App = (/* props OR { prop1, prop2 } */) => (
//    <div>
//      <p>{displayMessage}</p>
//    </div>
// );


/*
==========================================================
  This is what you do if you want this component or any
  other to become a connected "container" component!
==========================================================
*/
// /* At top of file: */
// import { connect } from 'react-redux';
//
// /* At bottom of file: */
// const mapStateToProps = (state) => ({
//    someStateProp: /* state.something typically */
// });
//
// const mapDispatchToProps = (dispatch) => ({
//    someDispProp: /* some function that dispatches an action */
// });
//
// App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
