import React from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import DaySchedule from '../components/DaySchedule';

class Scheduler extends React.Component {
  constructor() {
    super();
    this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  }
  render() {
    return (
      <Segment.Group horizontal>
        {this.days.map((day, index) => <DaySchedule key={index} day={day} />)}
      </Segment.Group>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Scheduler);