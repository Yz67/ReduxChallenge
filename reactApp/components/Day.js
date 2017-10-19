import { connect } from 'react-redux';
import React from 'react';
import TimeSlot from './TimeSlot';
import DateLabel from './DateLabel';

class Day extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div id="day-container" className="transparent">
        <DateLabel day={this.props.day}/>
        {this.props.timeSlots[this.props.day].map((time,index)=>(<TimeSlot key={`time_slot_${this.props.day}_${index}`} day={this.props.day} timeSlot={index}/>))}
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  timeSlots: state.timeSlots
});

const mapDispatchToProps = (dispatch) => ({});

Day = connect(mapStateToProps, mapDispatchToProps)(Day);

export default Day;
