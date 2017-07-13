import React from 'react';
import ModalClass from './Modal';
import Week from './Week';

const displayMessage =
  'The React Redux Boilerplate is running successfully!';

// class component
class App extends React.Component {
  render() {
    return (
      <div>
        <Week />
        <p>{displayMessage}</p>
      </div>
    );
  }
};


/* Equivalent function component! */
// const App = () => (
//    <div>
//       <ModalClass />
//       {displayMessage}
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
