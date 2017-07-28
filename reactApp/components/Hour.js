import React from 'react';
// import ModalContainer from '../containers/ModalContainer';
import Modal from 'react-modal'


const styles = {
    hour: {
        height: '20px',
        borderRadius: '5x',
        verticalAlign: 'center',
        margin: '5px',
        padding: '5px',
        border: '2px solid black'
    },
    hourOpen: {
        backgroundColor: 'blue'
    },
    hourClosed: {
        backgroundColor: 'red'
    },
    modal: {
        fontFamily: 'Avenir',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
    button: {
        backgroundColor: 'blue',
        fontSize: '20px',
        color: 'white',
        fontFamily: 'Avenir',
        width: '200px',
        padding: '5px',
        borderRadius: '5px',
        border: '0px',
        margin: '10px',
    },
    input: {
        width: '200px',
        fontSize: '20px',
        borderRadius: '5px',
        fontFamily: 'Avenir',
        padding: '5px',
        margin: '10px',
        border: '0.3 px solid grey'
    },
    exit: {
        position: 'absolute',
        right: '2%',
        top: '2%',
        fontFamily: 'Avenir'
    }
}


class Hour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalSwitch: false,
            name: '',
            number: ''
        }
    }

    toggleModal() {
      this.setState({modalSwitch: !this.state.modalSwitch})
    }

    onHandleNameChange(nameValue) {
        this.setState(Object.assign({}, this.state, { name: nameValue}))
    }

    onHandleNumberChange(numberValue) {
        this.setState(Object.assign({}, this.state, { number: numberValue}))
    }

    onClickHour(name, number) {
        this.props.onSubmitClick(name, number);
        this.toggleModal();
    }


  render() {
    return (
      <div onClick={() => this.toggleModal()}>
        {this.state.name === '' && this.state.number === '' ?
        <div style={Object.assign({}, styles.hour, styles.hourOpen)}>{this.props.hour}</div> :
        <div style={Object.assign({}, styles.hour, styles.hourClosed)}>{this.props.hour}</div>
        }
        <Modal
            isOpen={this.state.modalSwitch}
            contentLabel="Modal"
        >
            <div style={styles.exit} onClick={() => this.toggleModal()}>x</div>
            <div style={styles.modal}>
                {this.props.hour}, {this.props.day}
                <input style={styles.input} type="text" placeholder="Name" value={this.state.name} onChange={(event) => this.onHandleNameChange(event.target.value)}/>
                <input style={styles.input} type="text" placeholder="Phone Number" value={this.state.number} onChange={(event) => this.onHandleNumberChange(event.target.value)}/>
                <input style={styles.button} type="submit" placeholder="Submit" onClick={() => this.onClickHour(this.state.name, this.state.number)}/>
            </div>
        </Modal>
      </div>
    );
  }
};

export default Hour;
