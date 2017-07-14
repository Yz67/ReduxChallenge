import React from 'react';
import Week from './Week';
import { connect } from 'react-redux';
import Modal from 'react-modal';

let App = ({appointments, closeModal, clearAppointment, saveModal, modal, addCall, openModal, updateModalText, updateModalNumber}) => {
  // console.log("this is modal modifier", modal.modifier);
  // console.log(appointments[modal.modifier].text);
  // console.log("this is appts", appointments);

  return (
     <div>
       <h1>Phone Call Calendar</h1>
       {/* {console.log("this is modal", modal)} */}
       <Modal
          className="modalClass"
          isOpen={modal.open}
          contentLabel="Modal">
          <h1>Modal Content</h1>
          <input
            type="text"
            placeholder="Name..."
            value={modal.inputText}
            onChange={(event) => updateModalText(event)}
            // onChange={(event) => this.handleChange(event)}
            // value={this.state.task}
          />
          <input
            type="text"
            placeholder="Number..."
            value={modal.inputNumber}
            onChange={(event) => updateModalNumber(event)}
            // value={this.state.task}
          />
          <button
            onClick={() => saveModal(modal.modifier)}>
            Save appointment
          </button>
          <button
            onClick={() => clearAppointment(modal.modifier)}>
            Cancel appointment
          </button>
          <button
            onClick={() => closeModal()}>
            Close Window
          </button>
       </Modal>
       <Week
         openModal={(id) => openModal(id)}
         appointments={appointments}></Week>
     </div>
  );
}


const mapStateToProps = (state) => ({
   appointments: state.array,
   modal: state.modal
});

const mapDispatchToProps = (dispatch) => ({
  //  openModal: (id) => {
  //   //  dispatch({id: id, type: "ADD_CALL"}),
  //    dispatch({type: "TOGGLE_MODAL"})
  //  },
   openModal: (id) => {
     dispatch({id: id, type: "OPEN_MODAL"})
   },
   updateModalText: (event) => {
     dispatch({type: "UPDATE_MODAL_TEXT", event: event})
   },
   updateModalNumber: (event) => {
     dispatch({type: "UPDATE_MODAL_NUMBER", event: event})
   },
   saveModal: (id) => {
     dispatch({type: "SAVE_MODAL"}),
     dispatch({type: "CLOSE_MODAL"})
   },
   clearAppointment: (id) => {
     dispatch({id: id, type: "CANCEL_APPOINTMENT"}),
     dispatch({type: "CLOSE_MODAL"})
   },
   closeModal: () => {
     dispatch({type: "CLOSE_MODAL"})
   }
});



App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;



// const mapStateToProps = state => {
//   return {
//     appointments: state
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     addCall: (id) => {
//       dispatch({id: id, text: 'this is an appointment'})
//     }
//   }
// }

/*
==========================================================
  This is what you do if you want this component or any
  other to become a connected "container" component!
==========================================================
*/

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Hour
//           addCall={(id) => addCall(id)}></Hour>
//       </div>
//     );
//   }
// };
