import React from 'react';

const Days = ({selectDay}) => {
  return (
      <div>
         <button onClick={() => {selectDay(1)}}>Monday</button>
         <button onClick={() => selectDay(2)}>Tuesday</button>
         <button onClick={() => selectDay(3)}>Wednesday</button>
         <button onClick={() => selectDay(4)}>Thursday</button>
         <button onClick={() => selectDay(5)}>Friday</button>
         <button onClick={() => selectDay(6)}>Saturday</button>
         <button onClick={() => selectDay(7)}>Sunday</button>
      </div>
  );
}

export default Days;
