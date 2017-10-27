import React from 'react';
import Board from './Board';
// import PlayerLine from './PlayerLine';

// class component
class Game extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div>
        {/* <PlayerLine playerTurn={this.state.playerTurn}/> */}
        <Board/>
      </div>
    )
  }
};

/* Equivalent function component! */
// const App = (/* props OR { prop1, prop2 } */) => (
//    <div>
//      <p>{displayMessage}</p>
//    </div>
// );


/*
==========================================================
  This is what you do if you want this component or any
  other to become a connected "container" component!
==========================================================
*/
// /* At top of file: */
// import { connect } from 'react-redux';
//
// /* At bottom of file: */
// const mapStateToProps = (state) => ({
//    someStateProp: /* state.something typically */
// });
//
// const mapDispatchToProps = (dispatch) => ({
//    someDispProp: /* some function that dispatches an action */
// });
//
// App = connect(mapStateToProps, mapDispatchToProps)(App);

export default Game;
