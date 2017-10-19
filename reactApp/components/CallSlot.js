import React from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';


let CallSlot = ({openModal, closeModal, changeName, changeNumber, data, time, day}) => {
  // constructor() {
  //   super();
  //   this.state = {
  //     modalIsOpen: false,
  //     backgroundColor: 'lightgreen',
  //     name: '',
  //     number: ''
  //   };
  //
  //   this.openModal = this.openModal.bind(this);
  //   // this.afterOpenModal = this.afterOpenModal.bind(this);
  //   this.closeModal = this.closeModal.bind(this);
  // }

  // openModal() {
  //   this.setState({modalIsOpen: true});
  // }

  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }

  // closeModal() {
  //   this.setState({modalIsOpen: false});
  // }
  //
  // handleNameChange(event) {
  //   this.setState({ name: event.target.value });
  // }
  //
  // handleNumberChange(event) {
  //   this.setState({ number: event.target.value });
  // }



  // render() {
    return (
      <div style={{border: '1px solid grey', backgroundColor: (data[time][day].name || data[time][day].number) ? 'pink' : 'lightgreen'}} onClick={() => openModal(time, day)}>
        <div> {data[time][day].name} - {data[time][day].number}</div>
        <Modal
          key={`${time}and${day}`}
          isOpen={data[time][day].modalIsOpen}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={() => closeModal(time, day)}
          // contentLabel="Example Modal"
        >

          <h2>Hello</h2>
          <button onClick={() => closeModal(time, day)}>close</button>
          <h3>Day: {day}</h3>
          <h3>Time: {time}</h3>
            Name: <input onChange={(e) => changeName(e.target.value, time, day)} value={data[time][day].name}/>
            Phone: <input onChange={(e) => changeNumber(e.target.value, time, day)} value={data[time][day].number}/>
            <button onClick={() => closeModal(time, day)}>Schedule</button>
        </Modal>
      </div>
    );
  // }
};
const mapStateToProps = state => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openModal: (time, day) => dispatch({type: 'OPEN_MODAL', time: time, day: day}),
    closeModal: (time, day) => dispatch({type: 'CLOSE_MODAL', time: time, day: day}),
    changeName: (name, time, day) => dispatch({type: 'CHANGE_NAME', name: name, time: time, day: day}),
    changeNumber: (number, time, day) => dispatch({type: 'CHANGE_NUMBER', number: number, time: time, day: day})
  }
}

CallSlot = connect(mapStateToProps, mapDispatchToProps)(CallSlot);

export default CallSlot;
