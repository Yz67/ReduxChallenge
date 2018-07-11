import React from 'react';
import Slot from './Slot';

const slotContainerStyle ={
  margin: '20px',
  borderRadius: '5px',
  fontSize: '15px',
  width: '375px'
}
const SlotContainer = ({day, scheduleClick, dayWeek}) => (
  <div style={slotContainerStyle}>
    {
      day.map((hour)=>
          <Slot scheduleClick={(t,d)=>scheduleClick(t,d)} dayWeek={dayWeek} hour={hour}/>
      )
    }
  </div>
);
export default SlotContainer;
