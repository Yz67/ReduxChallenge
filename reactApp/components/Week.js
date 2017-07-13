import React from 'react';
import ReactDOM from 'react-dom';
import Day from './Day';

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
class Week extends React.Component {
  render() {
    return (
      <div>
        {days.map((day) => <Day day={day}/>)}
      </div>
    )
  }
}

export default Week;
