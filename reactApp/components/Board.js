import React from 'react';
import Square from './Square';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="board-row">
          <Square switchPlayer={this.props.switchPlayer} playerTurn={this.props.playerTurn} />
          <Square switchPlayer={this.props.switchPlayer} playerTurn={this.props.playerTurn} />
          <Square switchPlayer={this.props.switchPlayer} playerTurn={this.props.playerTurn} />
        </div>
        <div className="board-row">
          <Square switchPlayer={this.props.switchPlayer} playerTurn={this.props.playerTurn} />
          <Square switchPlayer={this.props.switchPlayer} playerTurn={this.props.playerTurn} />
          <Square switchPlayer={this.props.switchPlayer} playerTurn={this.props.playerTurn} />
        </div>
        <div className="board-row">
          <Square switchPlayer={this.props.switchPlayer} playerTurn={this.props.playerTurn} />
          <Square switchPlayer={this.props.switchPlayer} playerTurn={this.props.playerTurn} />
          <Square switchPlayer={this.props.switchPlayer} playerTurn={this.props.playerTurn} />
        </div>
      </div>
    );
  }
}

export default Board;
