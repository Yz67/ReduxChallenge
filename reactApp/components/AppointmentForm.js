import React from 'react';
import { Form, Input } from 'semantic-ui-react';


class AppointmentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name:"",
      number: ""
    }
    
  }
  componentDidMount() {
    this.setState({name: this.props.name, number: this.props.number})
  }

  handleNameChange(input) {
    this.setState({name:input});
    this.props.nameChange(input);
  }

  handleNumberChange(input) {
    this.setState({number:input});
    this.props.numberChange(input);
  }
  render() {
    return (
      <div>
        <Input value={this.state.name} placeholder={"Name"} onChange={(e) => this.handleNameChange(e.target.value)}/>
        <Input value={this.state.number} placeholder={"Number"} onChange={(e) => this.handleNumberChange(e.target.value)}/>
      </div>
    );
  }
};

export default AppointmentForm;

// <Form>
//         <Form.Group widths='equal'>
//           <Form.Input label='First name' placeholder='First name' />
//           <Form.Input label='Last name' placeholder='Last name' />
//         </Form.Group>
        
//       </Form>