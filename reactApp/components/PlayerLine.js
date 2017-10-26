import React from 'react';

class PlayerLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>It is {this.props.playerTurn}'s turn to move!</div>
    );
  }
}

export default PlayerLine;
