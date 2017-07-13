import React from 'react'
import { Button, Header, Image, Modal, Segment } from 'semantic-ui-react'
import AppointmentForm from './AppointmentForm';


class CreateAppointment extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      name: "",
      number: ""
    }
    this.tempName = "";
    this.tempNum = "";
  }

  handleClick(hour) {
    this.setState({clicked: !this.state.clicked});
  }

  handleNameChange(input) {
    this.tempName = input;
  }

  handleNumberChange(input) {
    this.tempNum = input;
  }

  render() {
    return (
      <Modal
        trigger={
          <Segment 
            onClick={() => this.handleClick(this.props.hour)}
            style= { this.state.name ? {backgroundColor: 'lightgreen'} : {}}>
              <h3>{this.props.hour}</h3>
              <p>Name: {this.state.name} Number: {this.state.number}</p>
              
          </Segment>}
        header='Make a new Appointment!'
        content={<AppointmentForm
                    name={this.state.name}
                    number={this.state.number}
                    nameChange={(e) => this.handleNameChange(e)}
                    numberChange={(e) => this.handleNumberChange(e)}/>}
        actions={[<Button  triggerClose= {true} color='red'>No</Button>, 
        <Button  
          color='green' 
          triggerClose= {true}
          onClick={() => {this.setState({name: this.tempName, number:this.tempNum})}}>Yes</Button>]}
      />
    )
  }
}
export default CreateAppointment;