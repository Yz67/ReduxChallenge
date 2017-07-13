import React from 'react';
import App from '../containers/App';
import Day from '../containers/Day';


// class component
class Scheduler extends React.Component {
  render() {
    return (
      <div style={{display: 'flex', flex: 1}}>
       <div style={{padding: 40}}>
        <h3>Monday</h3><br/>
        <Day style={{flex: 1}}/>
        </div>
       <div style={{padding: 40}}>
        <h3>Tuesday</h3><br/>
        <Day style={{flex: 1}}/>
        </div>
       <div style={{padding: 40}}>
        <h3>Wednesday</h3><br/>
        <Day style={{flex: 1}}/>
        </div>
       <div style={{padding: 40}}>
        <h3>Thursday</h3><br/>
        <Day style={{flex: 1}}/>
        </div>
       <div style={{padding: 40}}>
        <h3>Friday</h3><br/>
        <Day style={{flex: 1}}/>
        </div>
      </div>
    );
  }
};

export default Scheduler;