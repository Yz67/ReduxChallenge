import { connect } from 'react-redux';
import React from 'react';
import TimeLabel from './TimeLabel';


var TimeContainer = ({ times }) => (
      <div id="time-container" className="transparent">
        <div id='corner' className="transparent"></div>
        {times.map((time,index)=>(<TimeLabel key={`time_label_${index}`} time={time}/>))}
      </div>
);

const mapStateToProps = (state) => ({
  times: state.times
});

const mapDispatchToProps = (dispatch) => ({});

TimeContainer = connect(mapStateToProps, mapDispatchToProps)(TimeContainer);

export default TimeContainer;
