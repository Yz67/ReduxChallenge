import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Day from './Day'

import Scheduler from '../components/Scheduler';
// import Avatar from 'react-toolbox/lib/avatar';
// import Chip from 'react-toolbox/lib/chip';


// class component
class Timeslot extends React.Component {
   constructor() {
    super();
 
    this.state = {
      modalIsOpen: false,
    }
      this.openModal = this.openModal.bind(this);
  this.afterOpenModal = this.afterOpenModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
    };
 


 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed. 
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  modalAction(){
    openModal()
  }
  
  render() {
    return (
        <div>
            <p></p>
             <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          
          contentLabel="Example Modal">
           <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>Schedule a call</div>
          <form>
            <input placeholder='Person Calling' />
            <input placeholder='Phone Number' />
          </form>
        </Modal>
        </div>
    );
  }
};
const mapStateToProps = (state) => ({
  //  someStateProp: /* state.something typically */
});

const mapDispatchToProps = (dispatch) => {
  //  someDispProp: /* some function that dispatches an action */
  return{}
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         // YOUR MAP DISPATCH TO PROPS HERE
//         onStartGame: ()=> dispatch({
//             type: 'START_GAME',
//         }),
//         onDecrementTimer: ()=> dispatch({
//             type: 'DECREMENT_TIMER',
//         }),
//         onEndGame: ()=> dispatch(startGame())
//     };
// };

Timeslot=connect(mapStateToProps, mapDispatchToProps)(Timeslot);
export default Timeslot;