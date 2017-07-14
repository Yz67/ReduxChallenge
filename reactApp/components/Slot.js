import React from 'react';
import {Button, Col, Card, Modal} from 'react-materialize';

// class component

const Slot = ({hourObj, nameChange, numberChange}) => {
  return (
   <div>
 		  <Card
        className={hourObj.booked.name ? 'light-blue lighten-2' : 'blue-grey darken-1'}
        textClassName='white-text'
        title={hourObj.hour + " : 00"}
        key={hourObj.hour}
        actions={[<Modal
          header='Modal Header'
          trigger={<Button waves='light'>Schedule</Button>}>
          <div id="full_description">
            <p>Name.</p>
            <input value={hourObj.booked.name}  onChange={(e) =>  nameChange(e.target.value, hourObj.hour) } />
            <p>Number.</p>
            <input value={hourObj.booked.num} onChange={(e) => numberChange(e.target.value, hourObj.hour)}/>
          </div>
        </Modal>]}>
        <p>Name: {hourObj.booked.name}</p><br/>
        <p>Number: {hourObj.booked.num}</p>
 		  </Card>

   </div>
  );
}

export default Slot;
