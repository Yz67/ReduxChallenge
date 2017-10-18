import React from 'react';
import Modal from 'react-modal';

class HourSlot extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  openModal() {
    this.setState({open: !this.state.open});
  }

  modalStyle() {
    return {
      overlay: {
        top: 200,
        left: 400,
        right: 400,
        bottom: 200,
      }
    }
  }

  render() {
    return (
      <div className='row grid-block' onClick={() => this.openModal()}>
        <p>{this.props.call.name}</p>
        <p>{this.props.call.number}</p>
        <Modal style={this.modalStyle()} isOpen={this.state.open}>
          <form className='col'>
            <h3>Add/Edit Call</h3>
            <h5>Who you gonna call?</h5>
            <input type='text' name='name' placeholder='Name' />
            <input type='text' name='number' placeholder='Phone Number' />
            <div className='row'>
              <input type='submit' value='save' />
              <button>Cancel</button>
            </div>
          </form>
        </Modal>
      </div>
    )
  }
}

// const mapStateToProps = () => ({});
//
// const mapDispatchToProps = dispatch => ({});

export default HourSlot;
