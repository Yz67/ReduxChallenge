import React from 'react';
import TimeSlot from './TimeSlot';

class Day extends React.Component {
  render() {
    return (
      <div id="day-container" className="transparent">
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
      </div>
    );
  }
};

export default Day;
