import React from 'react';
import { connect } from 'react-redux';

// class component
class App extends React.Component {
  render() {
    return (
      <div>
        <div style={{width: "100px",
          height: "100px",
          border: "2px solid black",
          backgroundColor: this.props.color}}></div>
        <button onClick={() => this.props.changeColor("red")}>Red</button>
        <button onClick={() => this.props.changeColor("green")}>Green</button>
        <button onClick={() => this.props.changeColor("blue")}>Blue</button>
      </div>
    );
  }
};




// /* At top of file: */
// i
//
// /* At bottom of file: */
const mapStateToProps = (state) => ({
   color: state.color
});

const mapDispatchToProps = (dispatch) => ({
   changeColor: (color) => dispatch({ type: "SET_COLOR", color: color})
});

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
