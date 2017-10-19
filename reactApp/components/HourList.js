import React from 'react';
import CallSlot from './CallSlot';


let HourList = ({day}) => {
  const times = [9, 10, 11, 12, 1, 2, 3, 4, 5]
    return (
      <div>
        {times.map((time) => <div style={{border: '1px solid grey'}}>
          {time}
          <CallSlot day={day} time={time}/>
        </div>)}
      </div>
    );
};

export default HourList;
