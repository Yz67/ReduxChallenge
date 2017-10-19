import { connect } from 'react-redux';
import React from 'react';
import TimeContainer from './TimeContainer';
import Day from './Day';
const displayMessage =
  'The React Redux Boilerplate is running successfully!';

// class component
var App = ({ days }) => (
      <div id="main">
        <div id="header">
          <h1>Phone Schedule</h1>
        </div>
        <div id="calendar">
          <TimeContainer />
          {days.map((day,index)=>(<Day key={`day_${index}`} day={index} />))}
        </div>
      </div>
);

const mapStateToProps = (state) => ({
  days: state.days
});

const mapDispatchToProps = (dispatch) => ({});

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
