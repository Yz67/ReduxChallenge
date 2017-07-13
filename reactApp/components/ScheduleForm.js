import React from 'react';
import { connect } from 'react-redux'
import Modal from 'react-modal';
import { Field, reduxForm, reset } from 'redux-form';
import { load } from '../reducers/modalLoadReducer';
// import { reset } from 'redux-form';

const customStyles = {
    overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(37, 37, 37, 0.38)'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
// const App = (/* props OR { prop1, prop2 } */) => (
let ScheduleForm = props => {
  const { handleSubmit, isOpen, onClose, time, info} = props
  return (
      <Modal
          isOpen={isOpen}
          onAfterOpen={() => {console.log('afteropencalled');}}
          onRequestClose={onClose}
          style={customStyles}
          contentLabel="Modal"
      >
          <form onSubmit={ handleSubmit }>
              {/* <div>{"Scheduling Meeting for: "+ time}</div> */}
              <div>
                  <label htmlFor="time">Time</label>
                  <Field name="time" component="input" type="number" disabled={true} />
              </div>
              <div>
                  <label htmlFor="firstName">First Name</label>
                  <Field name="firstName" component="input" type="text" />
              </div>
              <div>
                  <label htmlFor="lastName">Last Name</label>
                  <Field name="lastName" component="input" type="text" />
              </div>
              <div>
                  <label htmlFor="number">Number</label>
                  <Field name="number" component="input" type="text" />
              </div>
              <button type="submit">Submit</button>
          </form>
          <button onClick={onClose}>close</button>
      </Modal>


  )
}

const ReduxScheduleForm = reduxForm({
  // a unique name for the form
  form: 'meetingForm',
  onSubmitSuccess: (result, dispatch) => dispatch(reset('meetingForm'))
})(ScheduleForm)


// You have to connect() to any reducers that you wish to connect to yourself
export default connect(
  state => ({
    initialValues: state.initialFormValues.data // pull initial values from account reducer
  }), dispatch => ({
    // reduxForm() expects the component to have an onSubmit
    // prop. You could also pass this from a parent component.
    // I want to dispatch a redux action.
    onSubmit: data => dispatch({type: 'MODAL_SUBMIT', values: data})
  })
)(ReduxScheduleForm)

// export default ReduxScheduleForm;
