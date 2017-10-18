import React from 'react';

const DateList = ({date, onClick}) => {
  const selectedDayOfMonth = date.getDate();
  const today = new Date();
  const dayOfMonth = today.getDate();
  const dayList = [];
  for(var i =0; i < 8; i++){
    var newDayOfMonth = new Date();
    newDayOfMonth.setDate(newDayOfMonth.getDate() + i);
    dayList.push(newDayOfMonth.getDate());

  }
  return(
    <div className="row">
    <div className="col-sm-2"></div>
    <ul className="col-sm-8" style={{color: 'white', display: 'flex', listStyle: 'none', paddingLeft: '0', marginTop: '30px'}}>
    {dayList.map((day, index, list) => {
      if(selectedDayOfMonth === day) {
        if(day < 10){
          return <li onClick={() => {onClick(index)}} key={index} style={{justifyContent: 'space-between', flexGrow: '1', textAlign: 'center'}}> <span style={{color:'white',backgroundColor:'red', borderRadius: '50%', padding: '9px', cursor: 'pointer'}}>0{day}</span> </li>
        }
        return <li onClick={() => {onClick(index)}} key={index} style={{justifyContent: 'space-between', flexGrow: '1', textAlign: 'center'}}> <span style={{color:'white',backgroundColor:'red', borderRadius: '50%', padding: '9px', cursor: 'pointer'}}>{day}</span> </li>
      }
      if(day < 10){
        return <li key={index} onClick={() => {onClick(index)}} style={{justifyContent: 'space-between', flexGrow: '1', textAlign: 'center'}}> <span style={{border: '1px solid white', borderRadius: '50%', padding: '7px', cursor: 'pointer'}}>0{day}</span> </li>
      }
      return <li key={index} onClick={() => {onClick(index)}} style={{justifyContent: 'space-between', flexGrow: '1', textAlign: 'center'}}> <span style={{border: '1px solid white', borderRadius: '50%', padding: '7px', cursor: 'pointer'}}>{day}</span> </li>
    })}
    </ul>
    </div>
  )
}


export default DateList;
