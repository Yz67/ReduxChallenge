import React from 'react';
import DateDisplay from '../components/DateDisplay';
import DateList from '../components/DateList';
import AppointmentDisplay from '../components/AppointmentDisplay';
import { connect } from 'react-redux';


// class component
class App extends React.Component {

  render() {
    const today = new Date();
    const dayDiff = Math.round((this.props.selectedDate - today)/ (1000*60*60*24));
    return (
      <div className="jumbotron" style={{width: '100%', backgroundColor: 'dodgerblue', position: 'absolute', marginBottom: '0'}}>
        <DateDisplay />
        <DateList onClick= {this.props.changeDate} date={this.props.selectedDate} />
        <AppointmentDisplay onSubmit={this.props.setAppointment} appointments={this.props.appointments[dayDiff]}/>
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
const mapStateToProps = (state) => ({
   selectedDate: state.dateState.selectedDate,
   appointments: state.dateState.appointments
});

const mapDispatchToProps = (dispatch) => ({
   changeDate: (index) => dispatch({type: "CHANGE_DATE", dateDifference: index}),
   setAppointment: (appointmentIndex, phoneNumber, contactName) => dispatch({type: 'SET_APPOINTMENT', appointmentIndex, phoneNumber, contactName})
});
//
// App = connect(mapStateToProps, mapDispatchToProps)(App);

export default connect(mapStateToProps, mapDispatchToProps)(App);
