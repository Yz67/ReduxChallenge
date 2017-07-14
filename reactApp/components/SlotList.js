import React from 'react';
import Slot from './Slot';
import {Button, Col, Card} from 'react-materialize';


// class component
const SlotList = ({dayData, nameChange, numberChange}) => {
  return (
   <div>
     <Col s={1} >
      {dayData.map((hourObj)=>(
        <Slot
          key={hourObj.hour}
          hourObj={hourObj}
          nameChange={nameChange}
          numberChange={numberChange}
        />
      ))}
    </Col>
   </div>
  );
}

export default SlotList;
