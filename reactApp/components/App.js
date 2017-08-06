import React from 'react';
import { connect } from 'react-redux';
import Day from './Day';
import mainReducer from '../reducers/mainReducer';
import TimeSlot from './TimeSlot';
import { addEvent } from '../actions/index';

const App = (props) => {
  return <div style={{backgroundColor: '#FFFACD', alignItems: 'center'}}>
    <h1 style={{textAlign: 'center'}}>Get organized you fuck</h1>
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#FFFACD'}}>
    <Day handleSubmit= {(hour, day, name, number) => props.addEvent(hour, day, name, number)} dayTitle={'Monday'} boxList={props.monday} />
    <Day handleSubmit= {(hour, day, name, number) => props.addEvent(hour, day, name, number)} dayTitle={'Tuesday'} boxList={props.tuesday} />
    <Day handleSubmit= {(hour, day, name, number) => props.addEvent(hour, day, name, number)} dayTitle={'Wednesday'} boxList={props.wednesday} />
    <Day handleSubmit= {(hour, day, name, number) => props.addEvent(hour, day, name, number)} dayTitle={'Thursday'} boxList={props.thursday} />
    <Day handleSubmit= {(hour, day, name, number) => props.addEvent(hour, day, name, number)} dayTitle={'Friday'} boxList={props.friday} />
  </div>
</div>
};


const mapStateToProps = (state) => {
  return {
     monday: state.slice(0, 8),
     tuesday: state.slice(9, 17),
     wednesday: state.slice(18, 26),
     thursday: state.slice(27, 35),
     friday: state.slice(36, 44)
  }
};

const mapDispatchToProps = (dispatch) => ({
   addEvent: (hour, day, name, number) => {
     dispatch(addEvent(hour, day, name, number))
   }
});

 //const mApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default connect(mapStateToProps, mapDispatchToProps)(App);
