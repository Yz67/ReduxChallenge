import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { startGame} from '../actions/index';
import TextBox from '../components/TextBox';


class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <TextBox
                    valueState={this.state.value}
                    onHandleChange={(input) => this.onInput(input)}
                />
            </div>
        );
    }
}

AppContainer.propTypes = {
    onInput: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        wordList: state.wordList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startGameProp: () => dispatch(startGame()),
        charAddedProp: (input) => dispatch(charAdded(input))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
