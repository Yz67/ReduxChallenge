import React from 'react';
import { connect } from 'react-redux';
import Day from './Day';

// class component
let CalApp = ({all}) => (
      <div className="weekBox">
        {(Object.keys(all)).map((day, id) => <div className="dayAndBox" key={id + day}><div className="dayTitle">{day}</div><Day day={day}/></div>)}
      </div>
  )

const mapStateToProps = (state) => {
    return {
        all: state
}
};

// const mapDispatchToProps = (dispatch) => ({
//
//
// });
//
CalApp = connect(mapStateToProps)(CalApp);

export default CalApp;
