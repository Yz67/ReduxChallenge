import React from 'react';

const dummyData = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const DaysList = () => (
  <div className='row' id='days-list'>
    {dummyData.map(day => <span key={day}>{day}</span>)}
  </div>
);

export default DaysList;
