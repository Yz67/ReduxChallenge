import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { openModal } from '../actions/index';
import { closeModal } from '../actions/index';
import { changeName } from '../actions/index';
import { changeNumber } from '../actions/index';

class Hour extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const day = this.props.day;
    const time = this.props.time;
    const slotInfo = this.props.calendar[day][time]
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        onClick={() => this.props.onCloseModal(day, time)}
      />,
    ];
    return (
      <div className={'hour'}>
        <RaisedButton
          label={time}
          secondary={
            slotInfo.name || slotInfo.number ?
            true :
            false
          }
          fullWidth={true}
          onClick={() => this.props.onOpenModal(day, time)}
        />
        <Dialog
          title={day + ' at ' + time}
          actions={actions}
          modal={true}
          open={slotInfo.open}
          onRequestClose={() => this.props.onCloseModal(day, time)}
        >
          <TextField
            value={slotInfo.name}
            onChange={(e) => this.props.onNameChange(day, time, e.target.value)}
            hintText="Name"
            floatingLabelText="Name"
          /><br />
          <TextField
            value={slotInfo.number}
            onChange={(e) => this.props.onNumberChange(day, time, e.target.value)}
            hintText="Number"
            floatingLabelText="Number"
          /><br />
        </Dialog>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    calendar: state.calendar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseModal: (day, time) => dispatch(closeModal(day, time)),
    onOpenModal: (day, time) => dispatch(openModal(day, time)),
    onNameChange: (day, time, name) => dispatch(changeName(day, time, name)),
    onNumberChange: (day, time, number) => dispatch(changeNumber(day, time, number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hour);
