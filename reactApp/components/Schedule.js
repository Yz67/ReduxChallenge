import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

// class component
class Schedule extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div style={{
          display: 'flex',
          }}>
          {this.props.schedule.map(day => (
            <div key={day.name} style={{
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
              }}>
              <div style={{
                  background: 'lightgrey',
                  margin: 2
                }}>
                <center>{day.name}</center>
              </div>
              {day.timeSlots.map(timeSlot => (
                <button key={timeSlot.hour} style={{
                    background: timeSlot.available ? 'lightblue' : 'pink',
                    height: 40,
                    border: '1px solid',
                    borderRadius: 5,
                    margin: 2
                  }} onClick={() => this.props.timeSlotClick(day.name, timeSlot.hour)}>
                  {timeSlot.hour}
                </button>
              ))}
            </div>
          ))}
        </div>
        <Modal isOpen={this.props.modal.isOpen} contentLabel={"Modal"}>
          <h1>Ayyy</h1>
          Must be the monayyy <br/>
          <form>
            <label>Name: </label>
            <input type='text' value={this.props.modal.name}
              onChange={e => this.props.handleNameChange(e.target.value)} /><br/>
            <label>Phone Number: </label>
            <input type='text' value={this.props.modal.phoneNumber}
              onChange={e => this.props.handlePhoneNumberChange(e.target.value)} /><br/>
            <button onClick={(e) => this.props.handleSubmit(e)}>Submit</button>
            <button onClick={(e) => this.props.handleCancel(e)}>Cancel</button>
          </form>
        </Modal>
      </div>
    );
  }
};


const mapStateToProps = (state) => ({
   schedule: state.schedule,
   modal: state.modal
});

const mapDispatchToProps = (dispatch) => ({
   timeSlotClick: (dayName, hour) => dispatch({
     type: 'TIME_SLOT_CLICK',
     dayName: dayName,
     hour: hour
   }),
   handleNameChange: (name) => dispatch({
     type: 'HANDLE_NAME_CHANGE',
     name: name
   }),
   handlePhoneNumberChange: (phoneNumber) => dispatch({
     type: 'HANDLE_PHONE_NUMBER_CHANGE',
     phoneNumber: phoneNumber
   }),
   handleSubmit: (event) => {
     event.preventDefault();
     dispatch({
       type: 'HANDLE_SUBMIT'
     })
   },
   handleCancel: (event) => {
     event.preventDefault();
     dispatch({
       type: 'HANDLE_CANCEL'
     })
   }
});

const ScheduleContainer = connect(mapStateToProps, mapDispatchToProps)(Schedule);

export default ScheduleContainer;
