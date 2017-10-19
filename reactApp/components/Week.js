import React from 'react';
import { connect } from 'react-redux';

// imported components
import Day from './Day'

class Week extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    const weekdays = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday'
    ]
    return (
      <div>
        <div className={'week'}>
          {weekdays.map(day =>
            <Day
              key={day}
              day={day}
            />
          )}
        </div>
      </div>
    );
  }
};

export default Week;
