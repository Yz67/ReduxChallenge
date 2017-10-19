import React from 'react';

const TimeSlot = ({ time, name, phone, whenClicked }) => {
  let color = "grey";
  let message = time + ": available";
  if (name && phone) {
    color = "lime";
    message = time + ": " + name + " -- " + phone;
  }

  return (
    <div onClick={whenClicked} style={{backgroundColor: color}}>
      {message}
    </div>
  )

};


export default TimeSlot;
