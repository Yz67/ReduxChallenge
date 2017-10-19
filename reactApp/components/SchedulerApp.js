import React from 'react';
import { connect } from 'react-redux';
import Selector from './Selector';
import Weeks from './Week';
import Days from './Day';
import Schedule from './Schedule';
import {selectMonthReducer, selectWeekReducer, selectDayReducer} from '../actions/index';

let SchedulerApp = ({selectMonth, selectWeek, selectDay, month, week, day, scheduledTimes}) => {
  return (
    <div>
      <h1>Scheduler </h1>
      <Selector selectMonth={(month) => {
        selectMonth(month);
      }
    }/>
    {month ? <Weeks month={month} selectWeek={(week) => {
      selectWeek(week);
    }
  }/> : null }
    {week ? <Days selectDay={(day) => {
      selectDay(day);
    }}/> : null}
    {day ? <Schedule scheduledTimes={scheduledTimes} day={day} month={month} week={week}/> : null}
</div>
)}

const mapStateToProps = (state) => {
  return {
    month: state.month,
    week: state.week,
    day: state.day,
    modalIsOpen: state.modalIsOpen,
    scheduledTimes: state.scheduledTimes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectMonth: (month) => {
      dispatch(selectMonthReducer(month))
    },
    selectWeek: (week) => {
      dispatch(selectWeekReducer(week))
    },
    selectDay: (day) => {
      dispatch(selectDayReducer(day))
    }
  }
}

SchedulerApp = connect(mapStateToProps, mapDispatchToProps)(SchedulerApp);
export default SchedulerApp;
