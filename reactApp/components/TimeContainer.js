import React from 'react';
import TimeLabel from './TimeLabel';

class TimeContainer extends React.Component {
  render() {
    return (
      <div id="time-container" className="transparent">
        <TimeLabel />
        <TimeLabel />
        <TimeLabel />
        <TimeLabel />
        <TimeLabel />
        <TimeLabel />
        <TimeLabel />
        <TimeLabel />
        <TimeLabel />
      </div>
    );
  }
};

export default TimeContainer;
