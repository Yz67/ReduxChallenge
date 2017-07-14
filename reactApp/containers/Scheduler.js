// import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import TimeSlotContainer from '../components/TimeSlotContainer';


// const displayMessage = 'The React Redux Boilerplate is running successfully!';

// class component
class Scheduler extends React.Component {
    render() {
        return (
            <div>
                <TimeSlotContainer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        wordList: state.wordList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStartGame: () => dispatch({})
    };
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
==========================================================
*/
// /* At top of file: */
// import { connect } from 'react-redux';
//
// /* At bottom of file: */
// const mapStateToProps = (state) => ({
//    someStateProp: /* state.something typically */
// });
//
// const mapDispatchToProps = (dispatch) => ({
//    someDispProp: /* some function that dispatches an action */
// });
//
// App = connect(mapStateToProps, mapDispatchToProps)(App);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Scheduler);
