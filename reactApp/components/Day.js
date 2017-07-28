import React from 'react';
import Hour from './Hour';
import HourContainer from '../containers/HourContainer';

const styles = {
    day: {
        width: '100px'
    }
}

class Day extends React.Component {
  render() {
    return (
      <div style={styles.day}>
        <h3>{this.props.day}</h3>
        <div>
            {[9, 10, 11, 12, 1, 2, 3, 4, 5].map((hour) => {
                return <HourContainer key={hour} day={this.props.day} hour={hour}/>
            })}
        </div>
      </div>
    );
  }
};

export default Day;
