import React from 'react';

class TimeLabel extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div id="time-label-container">
        <p>{this.props.time}</p>
      </div>
    );
  }
};

export default TimeLabel;
