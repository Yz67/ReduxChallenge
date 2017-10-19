import { connect } from 'react-redux';
import React from 'react';
import Modal from 'react-modal';
import { updateSlot } from '../../actions/actions';
import modalStyle from '../../build/public/assets/css/modalStyle';

class TimeSlot extends React.Component {
  constructor(props){
    super(props);
    const day = props.day;
    const hour = props.timeSlot;
    const slot = Object.assign({},props.timeSlots[day][hour]);
    this.state={
      modal: false,
      day: day,
      hour: hour,
      slot: slot,
      inputName: slot.name,
      inputPhone: slot.phone
    }
  }

  componentWillReceiveProps(newProps){
    if(newProps.timeSlots[this.state.day][this.state.hour]) {
      const slot = Object.assign({},newProps.timeSlots[this.state.day][this.state.hour]);
        this.setState({
          slot,
          inputName: slot.name,
          inputPhone: slot.phone
        });
    }
  }

  toggle(){
    this.setState({
      modal: !this.state.modal,
    });
  }

  updateName(inputName){
    this.setState({
      inputName
    });
  }

  updatePhone(inputPhone){
    this.setState({
      inputPhone
    });
  }

  handleClear(evt){
    evt.preventDefault();
    this.setState({
      inputName: '',
      inputPhone: ''
    });
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.props.submitInfo(this.state.inputName,this.state.inputPhone,this.state.day,this.state.hour);
    this.toggle.bind(this)();
  }

  render() {
    return (
      <div id="time-slot-container" className={`${(this.state.slot.name || this.state.slot.phone) ? 'scheduled' : 'open'}`} onClick={()=>this.toggle()}>
        <p>{this.state.slot.name}</p>
        <p>{this.state.slot.phone}</p>
        <Modal
          isOpen={this.state.modal}
          /*onAfterOpen={this.afterOpenModal}*/
          /*onRequestClose={requestCloseFn}*/
          style={modalStyle}
          contentLabel="Modal"
          >
            <h1 id="modalHeader">{this.state.slot.name || this.state.slot.phone ? 'Edit Appointment' : 'New Appointment'}</h1>
            <span className="modalSpan">
              <label className="modalLabel">Name:</label>
              <input className="modalInput" value={this.state.inputName} onChange={(evt)=>this.updateName(evt.target.value)}/>
            </span>
            <span className="modalSpan">
              <label className="modalLabel">Phone:</label>
              <input className="modalInput" value={this.state.inputPhone} onChange={(evt)=>this.updatePhone(evt.target.value)}/>
            </span>
            <span className="modalSpan">
              <button className="modalButton" onClick={(evt)=>this.handleSubmit(evt)}>Save</button>
              <button className="modalButton" onClick={(evt)=>this.handleClear(evt)}>Clear</button>
            </span>
        </Modal>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  timeSlots: state.timeSlots
});

var mapDispatchToProps = (dispatch)=>({
  submitInfo: (name,phone,day,hour)=>{
    dispatch(updateSlot(name,phone,day,hour));
  }
});


TimeSlot = connect(mapStateToProps, mapDispatchToProps)(TimeSlot);

export default TimeSlot;
