import React from 'react';
import { connect } from 'react-redux';
import SlotContainer from './SlotContainer';
import { schedule } from '../action/actions';

const week = ["Mon", "Tues", "Wed", "Thur", "Fri"];

const mapStateToProps = (state) => {
  return{
    slots: state
  }
};

const mapDispatchToProps = (dispatch) => ({
  scheduleClick: (time, day) => {dispatch(schedule(time, day))}
});

const weekContainerStyle = {
  textAlign: 'center',
  color: 'gray',
  fontSize: '30px'
}
const weekStyle = {
  display: 'flex',
  flexFlow: 'row wrap'
}
var WeekContainer = ({slots, scheduleClick}) => (
  <div style={weekStyle}>
    {
      week.map((day) =>{
          return <div style={weekContainerStyle}>{day}<SlotContainer scheduleClick={(t,d) => scheduleClick(t,d)} dayWeek={day} day={slots[day]}/></div>
      })
    }
  </div>
);

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
WeekContainer = connect(mapStateToProps, mapDispatchToProps)(WeekContainer);

export default WeekContainer;
