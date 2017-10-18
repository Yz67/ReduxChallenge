import React from 'react';
import DayContainer from './DayContainer';
import { connect } from 'react-redux';

const GridContainer = ({ days }) => (
  <div className='row' id='grid-container'>
    {days.map((day, i) => <DayContainer key={i} day={i} hours={day} />)}
  </div>
);

const mapStateToProps = state => ({
  days: state
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(GridContainer);
