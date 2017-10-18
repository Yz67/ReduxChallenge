import React from 'react';

const DateDisplay = () => {
  const today = new Date();
  const day = today.getDay();
  const dayOfMonth = today.getDate();
  const month = today.getMonth();
  var actualDay;
  var actualMonth;
  switch (day) {
    case 0:
      actualDay = 'Sunday'
      break;
    case 1:
      actualDay = 'Monday';
      break;
    case 2:
      actualDay = 'Tuesday';
      break;
    case 3:
      actualDay= 'Wednesday';
      break;
    case 4:
      actualDay = 'Thursday';
      break;
    case 5:
      actualDay = 'Friday';
      break;
    case 6:
      actualDay = 'Saturday';
      break;
    default:
      break;
  }

  switch (month) {
    case 0:
      actualMonth = 'Jan'
      break;
    case 1:
      actualMonth = 'Feb';
      break;
    case 2:
      actualMonth = 'Mar';
      break;
    case 3:
      actualMonth = 'Apr';
      break;
    case 4:
      actualMonth = 'May';
      break;
    case 5:
      actualMonth = 'Jun';
      break;
    case 6:
      actualMonth = 'Jul';
      break;
    case 7:
      actualMonth = 'Aug';
      break;
    case 8:
      actualMonth ='Sep';
      break;
    case 9:
      actualMonth = 'Oct';
      break;
    case 10:
      actualMonth = 'Nov';
      break;
    case 11:
      actualMonth = 'Dec';
    default:
      break;
  }
  const nextWeek = dayOfMonth + 7;
  const displayMessage = 'Schedule calls from ' + actualDay + ', ' + dayOfMonth + 'th - ' + actualDay + ', ' + nextWeek + ' ' +actualMonth;

  return (
    <div className = "text-center" >
      <h4 style={{color: 'white'}}>{displayMessage}</h4>
    </div>
  );
}

export default DateDisplay;
