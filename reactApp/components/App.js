import React from 'react';
import { connect } from 'react-redux';
import { Form, FormControl, Button, ListGroup, ListGroupItem, Row, Col, Modal, input } from 'react-bootstrap';
import _ from 'underscore';

const TimeArr = _.range(24);

// class component
class App extends React.Component {
  render() {
    return (
      <div>
            <ListGroup>
              {TimeArr.map((time) => <ListGroupItem >{'        '}
                <ModalBox time={time} /></ListGroupItem>)}
          </ListGroup>
      </div>
    );
  }
};


class ModalBox extends React.Component {
  constructor(){
    super();
    this.state = {
      showModal: false,
      currentName: '',
      currentNumber: ''
    }
  }
  close() {
   this.setState({ showModal: false });
  }
  open() {
   this.setState({ showModal: true });
  }
  // save() {
  //   this.props.
  // }
  render() {
    return (
      <span>
        <Button onClick={() => this.open()}>{this.props.time}:00</Button>
             <Modal show={this.state.showModal} onHide={() => this.close()}>
               <Modal.Header closeButton>
                 <Modal.Title>New Appointment</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                 {/* <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>
                 <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p> */}
                 Name: <input type="text" placeholder="Ghost David" />
                 {'     '}Phone Number: <input type="text" placeholder="911" />
               </Modal.Body>
               <Modal.Footer>
                 {/* <Button onClick={this.save}>Save</Button> */}
                 <Button onClick={()=>this.close()}>Close</Button>
               </Modal.Footer>
             </Modal>
      </span>
   )
  }
}
/* Equivalent function component! */
// const App = (/* props OR { prop1, prop2 } */) => (
//    <div>
//      <p>{displayMessage}</p>
//    </div>
// );



const mapStateToProps = (state) => ({
   list: state
});

const mapDispatchToProps = (dispatch) => ({
   infoChange: (time, name, number) => {
     dispatch({type: 'CHANGE', time:time, name:name, number:number })
   }
});

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
