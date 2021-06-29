import React from 'react';
import Slot from './Slot';
import Header from './Header';

const Workday = ({ slotsArr, day, dayNum, slotHours, handleOpenModal, handleUpdateSlot }) => {
  return (
    <div id="workday">
      <div className='header'>{day}</div>
      {slotHours.map((time, slotNum) => {
        console.log("Day", day);
        let isTaken = !!slotsArr[dayNum][slotNum].name && !!slotsArr[dayNum][slotNum].number;
        let modalOpened = slotsArr[dayNum][slotNum].modalOpened;
        return <Slot
          slotsArr={slotsArr}
          taken={isTaken}
          name={slotsArr[dayNum][slotNum].name}
          number={slotsArr[dayNum][slotNum].number}
          day={day}
          time={time}
          modalOpened={modalOpened}
          openModal={() => handleOpenModal(slotNum)}
          updateSlot={(name, num) => handleUpdateSlot(slotNum, name, num)}
        />
      })}
    </div>
  )
}

export default Workday;
