import React from 'react';
import { connect } from 'react-redux';

// imported components
import Hour from './Hour'

class Day extends React.Component {
  render() {
    const hours = [9, 10, 11, 12, 1, 2, 3, 4, 5]

    return (
      <div>
        <p>Day</p>
        {hours.map(hour =>
          <Hour
            className={'hour'}
            key={hour}
          />
        )}
      </div>
    );
  }
};

export default Day;
