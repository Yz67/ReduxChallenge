import React from 'react';
import { connect } from 'react-redux';
import { addApptAction } from '../actions/index';
import { noApptAction } from '../actions/index';
import Modal from 'react-modal';


class Hour extends React.Component {
    constructor(){
        super()
        this.state = {
            modalIsOpen: false,
            person: '',
            phone: ''
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.saveModalInfo = this.saveModalInfo.bind(this);
        this.deleteModalInfo = this.deleteModalInfo.bind(this);
    }

    openModal() {
       this.setState({modalIsOpen: true});
     }

     closeModal() {
       this.setState({modalIsOpen: false});
     }

     saveModalInfo() {
        this.setState({modalIsOpen: false});
        if (this.state.person !== '' || this.state.phone !== ''){
            this.props.addAppt(this.props.day, this.props.hour, this.state.person, this.state.phone)
        } else {
            this.props.noAppt(this.props.day, this.props.hour);
        }
     }

     deleteModalInfo() {
        this.setState({modalIsOpen: false});
        this.props.noAppt(this.props.day, this.props.hour);
     }

     handlePersonChange(event) {
       this.setState({ person: event.target.value });
     }

     handlePhoneChange(event) {
       this.setState({ phone: event.target.value });
     }


    render() {
    return (
    <div className="entireHourBox">
        <div style={this.props.all[this.props.day][this.props.hour].appt ? {backgroundColor: "pink"} : {backgroundColor: "skyblue"}}
             className="hourBox"
            //  onClick={() => this.props.addAppt(this.props.day, this.props.hour)}>
            onClick={this.openModal}>
             <div className="physicalHour">{this.props.hour}:00</div>
            <div className="hourSubBox">
                {this.props.all[this.props.day][this.props.hour].appt ? <p>{this.props.all[this.props.day][this.props.hour].person}<br/>{this.props.all[this.props.day][this.props.hour].phone}</p> : <p>Available</p> }
            </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
        >
        <div>Appointment: {this.props.day} at {this.props.hour}:00</div>
          <form>
            <input placeholder="Person" value={this.state.person} onChange={(e) => this.handlePersonChange(e)} />
            <input placeholder="Number" value={this.state.phone} onChange={(e) => this.handlePhoneChange(e)} />
            <button onClick={this.saveModalInfo}>Save</button>
            {this.props.all[this.props.day][this.props.hour].appt ? <button onClick={this.deleteModalInfo}>Delete Appointment</button> : null}
            <button onClick={this.closeModal}>Cancel</button>
          </form>
      </Modal>
    </div>
);
}}

const mapStateToProps = (state) => {
    return {
        all: state
}
};


const mapDispatchToProps = dispatch => {
  return {
      addAppt: (day, hour, person, phone) => dispatch(addApptAction(day, hour, person, phone)),
      noAppt: (day, hour) => dispatch(noApptAction(day, hour))
  }
}

Hour = connect(mapStateToProps, mapDispatchToProps)(Hour);

export default Hour;
