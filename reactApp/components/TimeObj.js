import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import {openModalReducer, closeModalReducer} from '../actions/index';

const timeObjBorder = {
  border: '2px solid black',
  display: 'flex',
  flex: 1
};

const changeName = (name, obj) => {
  obj.name = name;
}

const changeNumber = (number, obj) => {
  obj.number = number;
}

let TimeObj = ({obj, modalIsOpen, openModal, closeModal, changeName,
                changeNumber, day, week, month, hour}) => {
  let objStyle = {};
  console.log('changeName', changeName);
  console.log('obj: ', obj);
  console.log('timeobj.');


  const days = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
                'Saturday', 'Sunday'];

  const months = ['', 'January', 'February', 'March', 'April', 'May', 'June',
              'July', 'August', 'September', 'October', 'November', 'December'];


  obj.taken ? objStyle={backgroundColor: 'red', padding: '30px',
                        border: 'solid black'}
            : objStyle={backgroundColor: 'lightBlue', padding: '30px',
                        border: 'solid black'};

  let monthIndex = months.indexOf(obj.month);

  return (
    <div style={objStyle} onClick={() => {
      console.log('clicked.');
      modalIsOpen ? closeModal() : openModal();
    }}>
        <p> {obj.name ? obj.name : null} </p>
        <p> {obj.number ? obj.number : null} </p>
        <p> {obj.month ? obj.month : ''} </p>
        <p> {obj.week ? obj.week : ''} </p>
        <p> {obj.day ? days[obj.day] : ''} </p>
        <p> {obj.hour}:00 - {obj.hour + 1}:00</p>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          <h2>Hello</h2>
          <button onClick={() => closeModal()}>close</button>
          <h3>Day: {day} </h3>
          <h3>Time: {obj.hour}:00 - {obj.hour + 1}:00 </h3>
            Name: <input onChange={(e) => {
              obj.name = e.target.value;
            }}/>
            Phone: <input onChange={(e) => {
              obj.number = e.target.value;
            }} />
            <button onClick={() => {
              obj.taken = true;
              closeModal()
            }}>Schedule</button>

        </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    month: state.month,
    week: state.week,
    day: state.day,
    modalIsOpen: state.modalIsOpen,
    hour: state.hour
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => {
      console.log('in the dispatch to props.');
      dispatch({
        type: 'OPEN_MODAL'
      })
    },
    closeModal: () => {
      dispatch({
        type: 'CLOSE_MODAL'
      })
    }
  }
}

TimeObj = connect(mapStateToProps, mapDispatchToProps)(TimeObj);


export default TimeObj;
