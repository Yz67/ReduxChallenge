import React from 'react';
import Square from './Square';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        playerRow: 0,
        playerCol: 0,
    }

  }

  getRelation(row, col) {
    if (row === this.state.playerRow && col === this.state.playerCol) {
      return "here";
    } else if (
      (row === this.state.playerRow && col === this.state.playerCol + 1) ||
      (row === this.state.playerRow && col === this.state.playerCol - 1) ||
      (row === this.state.playerRow + 1 && col === this.state.playerCol) ||
      (row === this.state.playerRow - 1 && col === this.state.playerCol)
    ) {
      return "adjacent";
    } else {
      return "far";
    }
  }

  getColor(row, col) {
    var relation = this.getRelation(row, col);
    switch(relation) {
      case "here":
        return "#003865";
      case "adjacent":
        return "#78BE21";
      case "far":
        return "white";
      default:
        throw "wrong relation!!!"
    }
  }

  getWhenClicked(row, col) {
    var relation = this.getRelation(row, col);
    switch(relation) {
      case "here":
      case "far":
        return () => {};
      case "adjacent":
        return () => {
          this.movePlayer(row, col);
        };
      default:
        throw "wrong relation!!!"
    }
  }

  movePlayer(row, col) {
    this.setState({
      playerRow: row,
      playerCol: col
    });
  }

  render() {
    return (
      <div>
        <div className="board-row">
          <Square whenClicked={this.getWhenClicked(0,0)} color={this.getColor(0,0)}/>
          <Square whenClicked={this.getWhenClicked(0,1)} color={this.getColor(0,1)}/>
          <Square whenClicked={this.getWhenClicked(0,2)} color={this.getColor(0,2)}/>
        </div>
        <div className="board-row">
          <Square whenClicked={this.getWhenClicked(1,0)} color={this.getColor(1,0)}/>
          <Square whenClicked={this.getWhenClicked(1,1)} color={this.getColor(1,1)}/>
          <Square whenClicked={this.getWhenClicked(1,2)} color={this.getColor(1,2)}/>
        </div>
        <div className="board-row">
          <Square whenClicked={this.getWhenClicked(2,0)} color={this.getColor(2,0)}/>
          <Square whenClicked={this.getWhenClicked(2,1)} color={this.getColor(2,1)}/>
          <Square whenClicked={this.getWhenClicked(2,2)} color={this.getColor(2,2)}/>
        </div>
      </div>
    );
  }
}

export default Board;
