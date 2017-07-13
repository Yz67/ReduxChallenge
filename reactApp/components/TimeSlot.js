import React from 'react';
import Modal from 'react-modal'
//Modal.setAppElement(App);

// const TimeSlot = ({ time, open, modal, openModal, makeAppt }) => {
class TimeSlot extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name: '', phone: ''}
  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }
  handlePhoneChange(event) {
    this.setState({phone: event.target.value})
  }
  handleSubmit() {
    this.props.makeAppt(this.state.name, this.state.phone);
  }

render() {
  return (
   <div>
     {this.props.open ?
     <p style={{backgroundColor: 'green'}} onClick={this.props.openModal}>{this.props.time}</p> :
     <p style={{backgroundColor: 'red'}} onClick={this.props.openModal}>{this.props.time} {this.props.name} {this.props.phone}</p>}
     <Modal
      isOpen={this.props.modal}
      contentLabel="Modal"
    >
      <button onClick={this.props.closeModal}>X</button>
      <h1>Appointment</h1>
      <p>Name</p>
      <input
        type="text"
        placeholder="name"
        onChange={(event) => this.handleNameChange(event)}
        value={this.state.name}
      />
      <p>Phone</p>
      <input
        type="phone"
        placeholder="phone"
        onChange={(event) => this.handlePhoneChange(event)}
        value={this.state.phone}
      />
      <button onClick={() => this.handleSubmit()}>Submit Appointment</button>
    </Modal>
   </div>
 )
 }
};

export default TimeSlot
