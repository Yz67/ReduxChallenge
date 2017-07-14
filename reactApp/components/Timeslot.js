import React from 'react';
import Modal from 'react-modal';
import { Field, reduxForm } from 'redux-form';
import ScheduleForm from './ScheduleForm';


// const customStyles = {
//     overlay : {
//     position          : 'fixed',
//     top               : 0,
//     left              : 0,
//     right             : 0,
//     bottom            : 0,
//     backgroundColor   : 'rgba(37, 37, 37, 0.38)'
//   },
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)'
//   }
// };

class Timeslot extends React.Component {
  render() {
    //   const submit = values => {
    //       console.log(values);
    //   }
    return (
      <div className='timeslot'>
          {/* <div className='time'>{this.props.time}</div> */}
          {/* {this.props.day === 'Monday' ? <div className='time'>{this.props.time}</div> : null} */}
          <div className={this.props.occupied ? 'timeslotinfo occupied' : 'timeslotinfo open'}
              onClick={() => this.props.toggleModal(
                  {time: this.props.time,
                      firstName: this.props.info.firstName,
                      lastName: this.props.info.lastName,
                      number: this.props.info.number,
                      day: this.props.day
                  })}
          >
              {this.props.occupied ?
                  (<div className='slotLabel'>{"Call with " + this.props.info.firstName + " " + this.props.info.lastName + " - " + this.props.info.number}</div>
                  )
              : null }
          </div>

          {/* <Modal
              isOpen={this.props.modalOpen}
              onAfterOpen={() => {console.log('afteropencalled');}}
              onRequestClose={this.props.toggleModal}
              style={customStyles}
              contentLabel="Modal"
              >

              <form>
                  <input value={this.props.info} />
                  <button>tab navigation</button>
                  <button>stays</button>
                  <button>inside</button>
                  <button>the modal</button>
              </form>
              <button onClick={this.props.toggleModal}>close</button>
          </Modal> */}
          <ScheduleForm
              day={this.props.day}
              enableReinitialize={true}
              isOpen={this.props.modalOpen}
              onClose={() => this.props.onModalClose()}
          />
      </div>
    );
  }
};

export default Timeslot;
