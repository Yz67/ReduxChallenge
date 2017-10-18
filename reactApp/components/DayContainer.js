import React from 'react';
import HourSlot from './HourSlot';

const DayContainer = ({ hours, day }) => (
  <div className='col'>
    {hours.map((hour, i) => <HourSlot key={i} position={{day, hour: i}} call={hour} />)}
  </div>
)

export default DayContainer;
