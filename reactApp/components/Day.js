import React from 'react';
import Hour from './Hour';

const Day = ({ day }) => (
        <div className="dayBox">
              {([9, 10, 11, 12, 1, 2, 3, 4, 5]).map((hour, id) => {
                  return <div className="entireHourBox" key={id+day+"hour"}><Hour hour={hour} day={day} /></div>
              })}
        </div>
    );

export default Day;
