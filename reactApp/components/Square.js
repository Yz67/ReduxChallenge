import React from 'react';

class Square extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        player: ""
      }
    }

    render() {
      return (<button
        onClick={() => {
          this.setState({player: this.props.playerTurn});
          this.props.switchPlayer();
        }}
        className="square">{this.state.player}</button>);
    }
}

export default Square;
