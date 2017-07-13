import React from 'react';
import { Segment } from 'semantic-ui-react';
import HourSchedule from './HourSchedule';
import CreateAppointment from './CreateAppointment';

const hours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM'];
const DaySchedule = ({day}) => {
  return (
    <Segment>
      {day}

      {hours.map(((hour, index) => <CreateAppointment key={`${day+hour}`} hour={hour}/>))}
      
      
    </Segment>
  )
}

export default DaySchedule;