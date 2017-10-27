import React from 'react';

class Square extends React.Component {
    constructor(props) {
      super(props);

    }

    render() {
      return (<button onClick={this.props.whenClicked} style={{ backgroundColor: this.props.color }}className="square"> </button>);
    }
}

export default Square;
