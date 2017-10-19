import React from 'react';
import TimeSlot from './TimeSlot';
import { connect } from 'react-redux';


const Day = ({ appointments, openModal }) => (
  <div>
    {appointments.map((slot, i) => (
      <TimeSlot time={slot.time} name={slot.name} phone={slot.phone} whenClicked={() => openModal(i)}/>
    ))}
  </div>
)

const mapStateToProps = (state) => ({
  appointments: state.appointments
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (index) => dispatch({type: "OPEN_MODAL", index: index})
});

export default connect(mapStateToProps, mapDispatchToProps)(Day);
