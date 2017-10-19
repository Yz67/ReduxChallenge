import React from 'react';
import TimeObj from './TimeObj';
import Modal from 'react-modal';

const scheduleBorder = {
  border: '2px solid black',
  display: 'flex',
  padding: 30,
  justifyContent: 'center',
  flex: 1
};

const Schedule = ({month, week, day, scheduledTimes}) => {
  console.log('schedule.');
  scheduledTimes = scheduledTimes.filter((timeObj) => {
    return (timeObj.month === month && timeObj.day === day && timeObj.week === week);
  })
  // console.log('scheduledTimes after filter: ', scheduledTimes);
  return (
    /*
    timeslot object
    {month: day: hour: name: number: }
    filter and then sort map
    */
    <div style={scheduleBorder}>
      {
        scheduledTimes.map((timeObj) => {
          if(timeObj.taken){
            return <TimeObj key={month+''+day+''+Math.random()} obj={timeObj}/>
          }  else {
            return <TimeObj key={month+''+day+''+Math.random()} obj={timeObj}/>
          }
        })
      }

    </div>
  );
}

export default Schedule;
