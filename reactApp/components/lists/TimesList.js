import React from 'react';

const dummyData = [9, 10, 11, 12, 1, 2, 3, 4];

const TimesList = () => (
  <div className='col' id='times-list'>
    <span className='row' style={{paddingBottom: 10}}></span>
    {dummyData.map(time => <span className='row' key={time}>{`${time}:00`}</span>)}
  </div>
)

export default TimesList;
