import React from 'react';
import ScheduleContainer from './ScheduleContainer';

// class component
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>{displayMessage}</p>
//       </div>
//     );
//   }
// };

/* Equivalent function component! */
const App = () => (
   <div className='col'>
     <h1>Phone Call Scheduler</h1>
     <ScheduleContainer />
   </div>
);


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
