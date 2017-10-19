import React from 'react';
import HourList from './HourList';

let DayList = ({}) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

    return (
      <div style={{display: 'flex'}}>
        {days.map((day) => {
          return <div style={{border: '2px solid black', display: 'inline-block', flex: 1}}>
            <p>{day}</p>
            <HourList day={day}/>
          </div>
        })}
      </div>
    );
};

export default DayList
