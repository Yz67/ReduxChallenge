import React from 'react';
import TimeSlot from './TimeSlot'
import { connect } from 'react-redux';

// const displayMessage =
//   'The React Redux Boilerplate is running successfully!';

// class component
let App = ({ slots, makeApptClick, openModalClick, closeModalClick }) => {
  return (
   <div>
     <h2>Appointment Scheduler!!!!</h2>
     {slots.map((slot) => (
       <TimeSlot
         key={slot.time}
         time={slot.time}
         open={slot.open}
         name={slot.name}
         phone={slot.phone}
         modal={slot.modal}
         openModal={() => openModalClick(slot.time)}
         closeModal={() => closeModalClick(slot.time)}
         makeAppt={(name,phone) => makeApptClick(name,phone,slot.time)}
       />
     ))}
   </div>
 )
};

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



const mapStateToProps = (state) => ({
   slots: state
});

const mapDispatchToProps = (dispatch) => ({
  makeApptClick: (name,phone,time) => (dispatch({
    type: 'MAKE_APPT',
    name,
    phone,
    time
  })),
  openModalClick: (time) => (dispatch({
    type: 'OPEN_MODAL',
    time
  })),
  closeModalClick: (time) => (dispatch({
    type: 'CLOSE_MODAL',
    time
  }))
});

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
