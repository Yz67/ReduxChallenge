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
        <p>Week</p>
        <div>
          {weekdays.map(day =>
            <Day
              className={'day'}
              key={day}
              style=""
            />
          )}
        </div>
      </div>
    );
  }
};

export default Week;
