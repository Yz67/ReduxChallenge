import React from 'react';
import Modal from 'react-modal'

const styles = {
    body: {
        width: '500px',
        height: '500px'
    },
    
}

class ModalComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalSwitch: false,
        };
    }



  render() {
    return (
      <div style={styles.body}>

      </div>
    );
  }
};

export default ModalComp;
