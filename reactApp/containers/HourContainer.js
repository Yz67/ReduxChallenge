import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { changeStates } from '../actions/index';
import Hour from '../components/Hour';


class HourContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onSubmit(name, number) {
        this.props.changeStatesProp(name, number, this.props.hour, this.props.day);

    }

    render() {
        const timeslotID = this.props.day.toString() + this.props.hour.toString()
        return (
            <Hour
                key={this.props.hour}
                day={this.props.day}
                hour={this.props.hour}
                onSubmitClick={(name, number) => this.onSubmit(name, number)}
            />
        );
    }
}

HourContainer.propTypes = {
    changeStatesProp: PropTypes.func,
    mainState: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        mainState: state.main,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeStatesProp: (name, number, hour, day) => dispatch(changeStates(name, number, hour, day)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HourContainer);
