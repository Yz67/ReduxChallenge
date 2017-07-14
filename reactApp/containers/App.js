import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/actions';
import Day from '../components/Day';
import Modal from '../components/Modal';
import PropTypes from 'prop-types';

const displayMessage =
    'Welcome to the Scheduler!';

// class component
class App extends React.Component {
    render() {
        return (
            <div>
                <text>{ displayMessage }</text>
                <button onClick={ this.props.addDay }>+</button>
                { this.props.calendar.map(( day, idx ) =>
                    <Day
                        key={idx}
                        agenda={ day }
                        clickTime={ this.props.clickTime }
                        day={ idx }
                    />
                ) }
                { this.props.modal.display ?
                    <div className="modal-display">
                        <div className="blocker" onClick={ this.props.cancel } />
                        <Modal
                            person={ this.props.modal.person }
                            phone={ this.props.modal.phone }
                            day={ this.props.modal.day }
                            time={ this.props.modal.time }
                            handlePersonChange={ this.props.handlePersonChange }
                            handlePhoneChange={ this.props.handlePhoneChange }
                            handleSubmit={ this.props.handleSubmit }
                        />
                    </div>
                    : <div /> }
            </div>
        );
    }
}

App.propTypes = {
    calendar: PropTypes.array,
    modal: PropTypes.object,

    displayModal: PropTypes.func,
    handlePersonChange: PropTypes.func,
    handlePhoneChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    clickTime: PropTypes.func,
    addDay: PropTypes.func,
    cancel: PropTypes.func
};

const mapStateToProps = ( state ) => ( {
    calendar: state.calendar,
    modal: state.modal
} );

const mapDispatchToProps = ( dispatch ) => ( {
    clickTime: ( person, phone, day, time ) => dispatch( actions.clickTime( person, phone, day, time ) ),
    handlePersonChange: ( val ) => dispatch( actions.handlePersonChange( val ) ),
    handlePhoneChange: ( val ) => dispatch( actions.handlePhoneChange( val ) ),
    handleSubmit: ( person, phone, day, time ) => dispatch( actions.handleSubmit( person, phone, day, time ) ),
    addDay: () => dispatch( actions.addDay() ),
    cancel: () => dispatch( actions.cancel() )
} );

App = connect( mapStateToProps, mapDispatchToProps )( App );

export default App;
