import React from 'react';
import { Segment } from 'semantic-ui-react';
import CreateAppointment from './CreateAppointment.js';

class DaySchedule extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    }
  }

  handleClick(hour) {
    //alert(hour);
    this.setState({clicked: !this.state.clicked});
  }
  render() {
    return (
    <Segment  
      style= { this.state.clicked ? {backgroundColor: 'lightgreen'} : {}}
      onClick={(e) => this.handleClick(this.props.hour)}>

        {this.props.hour}
        <CreateAppointment />
    </Segment>
  )
  }
}

export default DaySchedule;