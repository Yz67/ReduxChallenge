import React from 'react';
import Day from './Day';
import ModalComp from './ModalComp';

// class component
const styles = {
    body: {
        backgroundColor: '#FFFFFF',
        fontFamily: 'Avenir',
        color: 'black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center'
    }
}

class App extends React.Component {
  render() {
    return (
      <div style={styles.body}>
          {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => {
              return <Day day={day} key={day}/>
          })}
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
