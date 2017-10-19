import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Days from './Day';
import PropTypes from 'prop-types'

const Weeks = ({selectWeek, month}) => {
  return (
    <div>
      <p> Month: {month} </p>
        <button onClick={() => {
          selectWeek(1);
        }}>Week 1 </button>

        <button onClick={(e) => {

          selectWeek(2);
        }}>Week 2 </button>

        <button onClick={(e) => {

          selectWeek(3);
        }}>Week 3 </button>

        <button onClick={(e) => {

          selectWeek(4);
        }}>Week 4 </button>

        <button onClick={(e) => {

          selectWeek(5);
        }}>Week 5 </button>
    </div>
  );
}

Weeks.propTypes = {
  month: PropTypes.string.isRequired
}

const Week = ({ match }) => (
  <div>
    <h3>Week: {match.params.week}</h3>
    <Days month={match.params.month} week={match.params.week}/>
  </div>
)

export default Weeks;
