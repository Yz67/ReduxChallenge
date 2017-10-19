import React from 'react';
import presets from '../../reducers/presets';
const months = presets.MONTH_ABBREVIATIONS;
const days = presets.DAY_ABBREVIATIONS;
const date = presets.START_DATE;

function addDays(date,addDays) {
    return new Date(date.getTime() + (addDays*24*60*60*1000));
}

class DateLabel extends React.Component {
  constructor(props){
    super(props);
    this.date = date;
    this.date = addDays(this.date,props.day);
  }

  render() {
    return (
      <div id="date-label-container">
        <p>{days[this.date.getDay()]}</p>
        <p>{`${months[this.date.getMonth()]} ${this.date.getDate()}`}</p>
      </div>
    );
  }
};

export default DateLabel;
