import React from 'react';
import ReactDOM from 'react-dom';
import ModalClass from './Modal';


const hours = [9,10,11,12,1,2,3,4,5]


class Day extends React.Component {
  render() {
    return(
      <div style={{display:'inline-block', margin:'0 0 0 20px'}}>
        <h3>{this.props.day}</h3>

        {hours.map((hour) => <div>{hour}<div> <ModalClass value={hour}/> </div></div>)}
      </div>
    )
  }
}

export default Day;
