import {Dialog} from 'react-toolbox/lib/dialog';
import {Button} from 'react-toolbox/lib/button';
import React from 'react';
import {Input} from 'react-toolbox/lib/input';
import { connect } from 'react-redux';
import {handleSubmit, handleDelete} from '../actions/index';
import PropTypes from 'prop-types';

class DialogBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            actions: [
                { label: 'Cancel', onClick: this.handleToggle.bind(this, null) },
                { label: 'Save', onClick: this.handleToggle.bind(this, 'save') },
                { label: 'Delete', onClick: this.handleToggle.bind(this, 'delete') },
            ],
            name: '',
            phone: '',
            tag: this.props.tag,
            button: 'Add Entry'
        };
    }

    onComponentDidMount() {
        this.state.name = this.props.entries[this.props.tag].name || '';
        this.state.phone = this.props.entries[this.props.tag].phone || '';
    }

    handleToggle(action) {
        this.setState({active: !this.state.active});
        if (action === 'save') {
            this.props.onHandleSubmit(this.props.tag, this.state.name, this.state.phone);
        }
        if (action === 'delete') {
            this.props.onHandleDelete(this.props.tag);
            this.state.name = '';
            this.state.phone = '';
        }
        if (this.state.name) {
            this.setState({button: 'Edit Entry'});
        } else {
            this.setState({button: 'Add Entry'});
        }
    }

    handleChange(name, value) {
        this.setState({...this.state, [name]: value});
    }

    render() {
        return (
            <div>
                <Button label={this.state.button} onClick={this.handleToggle.bind(this)} />
                <Dialog
                    actions={this.state.actions}
                    active={this.state.active}
                    onEscKeyDown={this.handleToggle.bind(this)}
                    onOverlayClick={this.handleToggle.bind(this)}
                    title="Enter "
                >
                    <section>
                        <Input type="text" label="Name" name="name" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={16 } />
                        <Input type="tel" label="Phone" name="phone" value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')} />
                    </section>
                </Dialog>
            </div>
        );
    }
}

DialogBox.propTypes = {
    tag: PropTypes.string,
    onHandleSubmit: PropTypes.func,
    onHandleDelete: PropTypes.func,
    onOverlayClick: PropTypes.func,
    entries: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        entries: state.entries
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onHandleSubmit: (tag, name, info) => dispatch(handleSubmit(tag, name, info)),
        onHandleDelete: (tag) => dispatch(handleDelete(tag))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DialogBox);
