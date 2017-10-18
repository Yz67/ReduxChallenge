import React from 'react';
import GridContainer from './GridContainer';
import DaysList from './lists/DaysList'

const WeekContainer = () => (
  <div className='col' id='week-container'>
    <DaysList />
    <GridContainer />
  </div>
)

export default WeekContainer;
