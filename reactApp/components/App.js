import React from 'react';
import Day from './Day';
import Modal from 'react-modal';
import { connect } from 'react-redux';

const displayMessage =
  'The React Redux Boilerplate is running successfully!';



// class component
class App extends React.Component {
  render() {
    return (
      <div>
        <Day />
        <Modal
          isOpen={this.props.isModalOpen}
          // onAfterOpen={afterOpenFn}
          onRequestClose={this.props.closeModal}
          // closeTimeoutMS={n}
          // style={customStyle}
          // contentLabel="Modal"
        >
          <h1>Modal Content</h1>
          <p>Etc.</p>
          {this.props.selectedTime}
          <button onClick={() => {
            this.props.schedule(this.props.selectedTime);
            this.props.closeModal();
          }}>SCHEDULE TEST</button>
        </Modal>
      </div>
    );
  }
};


const mapStateToProps = (state) => ({
   isModalOpen: state.modalOpen !== false,
   selectedTime: state.modalOpen
});

const mapDispatchToProps = (dispatch) => ({
   closeModal: () => dispatch({type: "CLOSE_MODAL"}),
   schedule: (index) => dispatch({ type: "SCHEDULE", index, name: "glenn", phone: 10 })
});

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
