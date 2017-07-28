import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { startGame} from '../actions/index';
import ModalComp from '../components/ModalComp';


class ModalContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        console.log(this.props.modalSwitch);
        return (
            <ModalComp modalSwitch={this.props.modalSwitch}/>
        );
    }
}

ModalContainer.propTypes = {
    // onInput: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        // wordList: state.wordList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // startGameProp: () => dispatch(startGame()),
        // charAddedProp: (input) => dispatch(charAdded(input))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalContainer);
