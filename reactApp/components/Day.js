import TimeSlot from './TimeSlot';
import React from 'react';

const Day = ({dayTitle, boxList, handleSubmit}) => {
  return (
    <div style={{paddingRight: 20}}>
      <h1>{dayTitle}</h1>

      {boxList.map((box) => (<TimeSlot key={dayTitle + ' ' + box.hour} handleSubmit={(hour, day, name, number) => handleSubmit(hour, day, name, number)} box={box} />))}

    </div>
  )
};

export default Day;
