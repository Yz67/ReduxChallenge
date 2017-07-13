import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { onTyping, onSubmit, cancel } from '../actions/index';

import CalBox from '../components/calBox';
import Input from '../components/input';

import Modal from 'react-modal';

class CalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        modalIsOpen: false,
        modalKey: null
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
}

    openModal(index) {
      this.setState({modalIsOpen: true});
      this.setState({modalKey: index});
    }

    closeModal() {
      this.setState({modalIsOpen: false});
    }

  render() {
    console.log(this.props.data)
          return (
            <div>
              <center><span className="title">Monday</span></center>
              <Input
                isOpen={this.state.modalIsOpen}
                closeModal={this.closeModal}
                onTyping={this.props.onTyping}
                modelKey={this.modelKey}
                currentData={this.props.currentData}
                onSubmit={this.props.onSubmit}
                allData={this.props.data}
              />
              <CalBox
                openModal={this.openModal}
                onTyping={this.props.onTyping}
                allData={this.props.data}
                cancel={this.props.cancel}
              />
            </div>
            )
      }
}

CalContainer.propTypes = {
    onTyping: PropTypes.func,
    onSubmit: PropTypes.func,
    data: PropTypes.array,
};

const mapStateToProps = (state) => {
    return {
      //REFER TO STATES SET UP IN MAIN REDUCER HERE!!!!
        currentData: state.currentData,
        data: state.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      onTyping: (key, letters) => {
          dispatch(onTyping(key, letters));
      },
      onSubmit: (index, data) => {
          dispatch(onSubmit(index, data));
      },
      cancel: (index) => {
          dispatch(cancel(index));
      }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalContainer);
