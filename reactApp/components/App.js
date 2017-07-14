import React from 'react';
import { connect } from 'react-redux';
import {Route, Link} from 'react-router-dom';
import {Button, Icon} from 'react-materialize';
import SlotList from './SlotList';

// class component
const App = ({allDayData, selectedDay, selectDay, nameChange, numberChange}) => {

  const dayData = allDayData[selectedDay];

  return (
    <div style={{width: '85%', margin: '0 auto'}}>
      <h1 style={{fontSize: '30', fonWeight: 'bold',marginLeft: '300'}}>Phone Call Scheduler</h1>
      <div style={{marginLeft: '25'}} className='navigationButtons'>
        <Button waves='light'
          onClick={()=>{selectDay('mon')}}
          className={(selectedDay === 'mon') ? 'blue' : ''}>Monday</Button>
        <Button waves='light'
          onClick={()=>{selectDay('tue')}}
          className={(selectedDay === 'tue') ? 'blue' : ''}>Tuesday</Button>
        <Button waves='light'
          onClick={()=>{selectDay('wed')}}
          className={(selectedDay === 'wed') ? 'blue' : ''}>Wednesday</Button>
        <Button waves='light'
          onClick={()=>{selectDay('thurs')}}
          className={(selectedDay === 'thurs') ? 'blue' : ''}>Thursday</Button>
        <Button waves='light'
          onClick={()=>{selectDay('fri')}}
          className={(selectedDay === 'fri') ? 'blue' : ''}>Friday</Button>
        <Button waves='light'
          onClick={()=>{selectDay('sat')}}
          className={(selectedDay === 'sat') ? 'blue' : ''}>Saturday</Button>
        <Button waves='light'
          onClick={()=>{selectDay('sun')}}
          className={(selectedDay === 'sun') ? 'blue' : ''}>Sunday</Button>
      </div>
      <div style={{marginTop: '30'}} >
        <SlotList
          dayData={dayData}
          nameChange={nameChange}
          numberChange={numberChange}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
   allDayData: state,
   selectedDay: state.selected
});

const mapDispatchToProps = (dispatch) => ({
   selectDay: (day) => dispatch({type: 'SELECT_DAY', day: day}),
   nameChange: (name, hour) => dispatch({type: 'NAME_CHANGE', name: name, hour: hour}),
   numberChange: (number, hour) => dispatch({type: 'NUMBER_CHANGE', number: number, hour: hour})
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
