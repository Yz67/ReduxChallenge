import React from 'react';
function returnMonth(month) {
  switch (month) {
    case 0:
      month = 'Jan'
      return month;
    case 1:
      month = 'Feb';
      return month;
    case 2:
      month = 'Mar';
      return month;
    case 3:
      month = 'Apr';
      return month;
    case 4:
      month = 'May';
      return month
    case 5:
      month = 'Jun';
      return month;
    case 6:
      month = 'Jul';
      return month;
    case 7:
      month = 'Aug';
      return month;
    case 8:
      month ='Sep';
      return month;
    case 9:
      month = 'Oct';
      return month;
    case 10:
      month = 'Nov';
      return month;
    case 11:
      month = 'Dec';
    default:
      return month;
  }
}
const DateDisplay = () => {
  const today = new Date();
  const day = today.getDay();
  const dayOfMonth = today.getDate();
  const month = today.getMonth();
  let actualDay;
  let actualMonth = returnMonth(month);

  const weekAhead = today;
  weekAhead.setDate(weekAhead.getDate() + 7);
  let nextMonth = weekAhead.getMonth();
  nextMonth = returnMonth(nextMonth);
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

  const nextWeek = weekAhead.getDate();

  let displayMessage = 'Schedule calls from ' + actualDay + ', ' + dayOfMonth + 'th - ' + actualDay + ', ' + nextWeek + ' ' + actualMonth;
  if(actualMonth !== nextMonth) {
    displayMessage ='Schedule calls from ' + actualDay + ', ' + dayOfMonth + 'th' + ' ' + actualMonth + ' - ' + actualDay + ', ' + nextWeek + ' ' +nextMonth;
  }
  return (
    <div className = "text-center" >
      <h4 style={{color: 'white'}}>{displayMessage}</h4>
    </div>
  );
}

export default DateDisplay;
