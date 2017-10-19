import React from 'react';

// imported components
import Week from './Week'

class Body extends React.Component {
  render() {
    return (
      <div className={'container'}>
        <Week />
      </div>
    );
  }
};

export default Body;
