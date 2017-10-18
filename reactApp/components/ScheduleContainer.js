import React from 'react';
import WeekContainer from './WeekContainer';
import TimesList from './lists/TimesList';

const ScheduleContainer = () => (
  <div className='row' id='schedule-container'>
    <TimesList />
    <WeekContainer />
  </div>
)

export default ScheduleContainer;
