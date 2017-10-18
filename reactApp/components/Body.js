import React from 'react';

// imported components
import Week from './Week'

class Body extends React.Component {
  render() {
    return (
      <div>
        <p>Body</p>
        <Week
          className={'week'}
        />
      </div>
    );
  }
};

export default Body;
