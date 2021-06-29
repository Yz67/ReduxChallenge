import React from 'react';
import Modal from 'react-modal';

class Slot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    }
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleNumberChange(event) {
    this.setState({
      number: event.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Name and number: ", this.state.name, this.state.number);
    this.props.updateSlot(this.state.name, this.state.number);
    console.log("Current state: ", this.state);
  }

  render() {
    let { slotsArr, taken, name, number, time, day, modalOpened, openModal, updateSlot} = this.props;
    // console.log("Day and time OUTSIDE render: ", day, time);
    console.log("updateSlot function inside slot: ", updateSlot);
    return (
      <div id='slot' className='box' onClick={() => openModal()}>
         {console.log("TAken: ", taken)}
         { !taken ? `Slot for ${time}-${time + 1}` : `${time}-${time + 1}: ${name} (${number})` }
        <Modal
            isOpen={modalOpened}
            // onAfterOpen={afterOpenFn}
            // onRequestClose={requestCloseFn}
            // closeTimeoutMS={n}
            // style={customStyle}
            contentLabel="Modal"
          >
            {/* {console.log("day and time INSIDE slot render ...BEFORE", day, time)} */}
            <div className="title">Schedule a new call for {day} at {time}:00</div>
            {/* {console.log("day and time INSIDE slot render ...AFTER", day, time)} */}
            <div> </div>
            <div>
              <form className="modalform">
                <input type="text"
                  placeholder="Callee Name"
                  value={this.state.name} onChange={(e) => this.handleNameChange(e)}
                />
                <input type="text"
                  placeholder="Phone Number"
                  value={this.state.number} onChange={(e) => this.handleNumberChange(e)}
                />
                <input type="text" value="Schedule" onClick={(e) => this.handleSubmit(e)}/>
              </form>
            </div>
        </Modal>
      </div>

    )
  }

}

export default Slot;
