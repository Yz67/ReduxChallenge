import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};



class ModalClass extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      name: '',
      number: ''
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneNumChange = this.handlePhoneNumChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

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

  handleSubmit() {
    console.log('Name: ', this.state.name);
    console.log('Phone #: ', this.state.number);
    this.closeModal();
  }

  handleNameChange(e) {
    this.setState({name: e.target.value})
  }

  handlePhoneNumChange(e) {
    this.setState({number: e.target.value})
  }

  handleCancel(){
    this.setState({name:'',number:''})
    this.closeModal()
  }

  render() {
    return (
      <div>
        <div onClick={this.openModal}>{this.state.name&&this.state.number ? <div style={{backgroundColor:'red'}}>{this.state.name} {this.state.number}</div> : <div style={{backgroundColor:'green'}}>Open Slot</div>}</div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={this.closeModal}>X</button>
          <h2 ref={subtitle => this.subtitle = subtitle}>Make Your Appointment Here</h2>

          <form>
            <input type = "text"
                  placeholder = "Name"
                  value = {this.state.name}
                  onChange = {this.handleNameChange}

            />
            <input type = "text"
                  placeholder = "Phone Number"
                  value = {this.state.number}
                  onChange = {this.handlePhoneNumChange}
            />
            <button type="button" onClick={this.handleSubmit}>Submit</button>
            <button type="button" onClick={this.handleCancel}>Cancel</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default ModalClass;
