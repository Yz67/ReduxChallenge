import React from 'react';
import Modal from 'react-modal';

class AppointmentDisplay extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
      selectedIndex: 0,
      phoneNumber: '',
      contactName: ''

    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  openModal(index) {
  this.setState({selectedIndex: index}, () => {
    if(this.props.appointments[index].phoneNumber) {
      this.setState({modalIsOpen: true, contactName: this.props.appointments[index].name, phoneNumber: this.props.appointments[index].phoneNumber});
    } else{
      this.setState({modalIsOpen: true, contactName: '', phoneNumber: ''});
    }

  });

}

afterOpenModal() {
}

closeModal() {
  this.setState({modalIsOpen: false});
}
handleInputChange(event) {
  const target = event.target;
  var value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;
  this.setState({
    [name]: value
  });
}
handleSubmit(e){
  e.preventDefault();
  this.props.onSubmit(this.state.selectedIndex, this.state.phoneNumber, this.state.contactName);
  this.setState({
    modalIsOpen: false
  });
}

render(){
  const timeArray = ['9-10 AM', '10-11 AM', '11AM - Noon', 'Noon - 1PM', '1-2 PM', '2-3 PM', '3-4 PM', '4-5 PM'];
  const {appointments} = this.props;
    return(
    <div className="card" style={{marginTop: '20px', borderRadius: '5px'}}>
    <Modal
      isOpen={this.state.modalIsOpen}
      onAfterOpen={this.afterOpenModal}
      onRequestClose={this.closeModal}
      contentLabel="Example Modal"
      style={{overlay: {backgroundColor: 'rgba(0,0,0,0.6)'}, content: {height: '50%', top: '100px'}}}
    >

      <h4>Please enter the name and phone number of your intended contact</h4>

      <form onSubmit={this.handleSubmit} style={{marginTop: '20px'}}>
        <div className="form-group">
          <label for="contact-name">Contact Name</label>
          <input onChange= {this.handleInputChange} type="text" className="form-control" name="contactName" id="contact-name" placeholder="Enter name:" value={this.state.contactName}></input>
        </div>
        <div className="form-group">
          <label for="number">Contact number</label>
          <input onChange= {this.handleInputChange} type="number" className="form-control" id="number" name="phoneNumber" placeholder="Phone Number" value={this.state.phoneNumber}></input>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button className="btn btn-danger" onClick={this.closeModal}>close</button>
      </form>
  </Modal>
      {this.props.appointments.map((appoint, index) => {
        if(appoint.phoneNumber) {
          return (
                <div key={index} onClick ={() => this.openModal(index)} style={{color: 'white', cursor: 'pointer', height: '64px', borderBottom: '1px solid grey', padding: '5px', backgroundColor: 'mediumseagreen'}}>
                      {timeArray[index]}
                      <div className="text-center">
                        <p> Booked with {appoint.name} </p>
                      </div>
                </div>
                )
        }
        return (
          <div key={index} onClick ={() => this.openModal(index)} style={{cursor: 'pointer', height: '64px', borderBottom: '1px solid grey', padding: '5px'}}>
            {timeArray[index]}
          </div>
        )
      })}
    </div>
  )
}
}


export default AppointmentDisplay;
