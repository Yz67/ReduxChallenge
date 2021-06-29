import React from 'react';
import Workday from './Workday';
import { connect } from 'react-redux';
import { updateSlot, openModal } from './../actions/index.js';

const displayMessage =
  'The React Redux Boilerplate is running successfully!';

const slotTimes = [9, 10, 11, 12, 13, 14, 15, 16];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

// class component
let Container = ({ slotsArr, updateSlot, openModal }) => {
  return (
    <div id='container'>
      <div className='title'>
        Schedule your calls on a simple click
      </div>
      <div id='weekdays'>
        {days.map((day, dayNum) => (
          <Workday
            slotsArr={slotsArr}
            day={day}
            dayNum={dayNum}
            slotHours={slotTimes}
            handleOpenModal={(slotNum) => openModal(dayNum, slotNum)}
            handleUpdateSlot={(slotNum, name, num) => updateSlot(dayNum, slotNum, name, num)}
          />
        ))}
      </div>
    </div>
  );
};

/* Equivalent function component! */
// const App = (/* props OR { prop1, prop2 } */) => (
//    <div>
//      <p>{displayMessage}</p>
//    </div>
// );


/*
==========================================================
  This is what you do if you want this component or any
  other to become a connected "container" component!
==========================================================
*/
// /* At top of file: */
// import { connect } from 'react-redux';
//
// /* At bottom of file: */
const mapStateToProps = (state) => {
  return {
    slotsArr: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSlot: (dayNum, slotNum) => dispatch(updateSlot(dayNum, slotNum)),
    openModal: (dayNum, slotNum) => dispatch(openModal(dayNum, slotNum))
  }
};

Container = connect(mapStateToProps, mapDispatchToProps)(Container);

export default Container;
