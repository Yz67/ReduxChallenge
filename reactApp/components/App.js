import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-modal';
import TimeslotList from './TimeslotList';

const displayMessage =
  'The React Redux Boilerplate is running successfully!';

// var timeslots = [{time: 9, info: '5164261057', occupied: true},{ time: 10, info: '', occupied: false},{ time: 11, info: '', occupied: false}]

// class component
class App extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.timeslots);
        // console.log(props.onTimeslotClick);
    }
  render() {
    return (
      <div>
          <TimeslotList
              timeslots={this.props.timeslots}
              toggleModal={(data) => this.props.onToggleModal(data)}
              modalOpen={this.props.modalOpen}
              onModalClose={() => this.props.onModalClose()}
              onModalSubmit={(values, time) => this.props.onModalSubmit(values, time)}
          />
      </div>
    );
  }
};

/* Equivalent function component! */
// const App = (/* props OR { prop1, prop2 } */) => (
//    <div>
//      <p>{displayMessage}</p>
//    </div>
// );


/*
==========================================================
  This is what you do if you want this component or any
  other to become a connected "container" component!

  1.Start with mapdispatchtoprops, to give compoennt props -> go to component and use the prop
  2. do reducer to update state
  3. mapstate to props to feed piece of state into component
==========================================================
*/
// /* At top of file: */
// import { connect } from 'react-redux';
//
// /* At bottom of file: */
const mapStateToProps = (state) => ({
   modalOpen: state.modalOpen,
   timeslots: state.timeslots
});
//
const mapDispatchToProps = (dispatch) => ({
    onToggleModal: (data) => {
       dispatch({type: 'TOGGLE_MODAL', data: data})
   },
   onModalClose: () => {
       dispatch({type: 'CLOSE_MODAL'})
   },
   onModalSubmit: (values, time) => {
      dispatch({type: 'MODAL_SUBMIT', values: values, time: time})
    }
});
//
App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
