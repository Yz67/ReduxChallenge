import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

class HourSlot extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      name: this.props.call.name || '',
      number: this.props.call.number || ''
    }
  }

  toggleModal() {
    this.setState({open: !this.state.open});
  }

  modalStyle() {
    return {
      overlay: {
        top: 200,
        left: 200,
        right: 200,
        bottom: 200,
      }
    }
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }

  handleNumChange(e) {
    this.setState({ number: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.update(this.props.position, this.state.name, this.state.number);
    this.toggleModal();
  }

  setStyle() {
    if (this.props.call.name || this.props.call.number) {
      return { backgroundColor: 'palegreen' }
    } else {
      return {}
    }
  }

  render() {
    return (
      <div className='col grid-block' style={this.setStyle()}
        onClick={() => this.toggleModal()}>
        <div>{this.props.call.name}</div>
        <div>{this.props.call.number}</div>
        <Modal style={this.modalStyle()} isOpen={this.state.open}>
          <form onSubmit={(e) => this.handleSubmit(e)} className='col'>
            <h3>Add/Edit Call</h3>
            <h5>Who you gonna call?</h5>
            <input value={this.state.name}
              autoFocus={true}
              onChange={(e) => this.handleNameChange(e)}
              type='text' name='name' placeholder='Name'
            />
            <input value={this.state.number}
              onChange={(e) => this.handleNumChange(e)}
              type='text' name='number' placeholder='Phone Number'
            />
            <div className='row'>
              <input type='submit' value='Save' />
              <input type='button' value='Cancel'
                onClick={() => this.toggleModal()}
              />
            </div>
          </form>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  update: (position, name, number) => dispatch({
    type: 'UPDATE',
    position,
    name,
    number,
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(HourSlot);
