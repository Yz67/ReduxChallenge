import React from 'react';

let Slot = ({scheduled, hour, onHourClick, onOpenModal, name, phone}) => {

    return (
      scheduled ?

        <div
          // key = {hour}
          style = {styleScheduled}
          onClick={() => onHourClick(hour), () => onOpenModal(hour)}>

            <div>{hour + ':00'}</div>
            <div>{name}</div>
            <div>{phone}</div>


        </div>

      :

        <div
          //key = {hour}
          style = {styleNotScheduled}
          onClick={() => onHourClick(hour), () => onOpenModal(hour)}>

            <div>{hour + ':00'}</div>
            <div>{name}</div>
            <div>{phone}</div>

        </div>

    )

}



const styleScheduled = {
  backgroundColor: '#f3a8a8',
  margin: 10,
  padding: 10,
  borderRadius: 4
}

const styleNotScheduled = {
  backgroundColor: '#a5f7a5',
  margin: 10,
  padding: 10,
  borderRadius: 4
}



export default Slot;


// slot.scheduled ?
// <div
//   key = {slot.hour}
//   style = {styleScheduled}
//   onClick={() => onHourClick(slot.hour), () => onOpenModal(slot.hour)}>
//         {slot.hour + ':00'}
// </div> :
//
// <div
//   key = {slot.hour}
//   style = {styleNotScheduled}
//   onClick={() => onHourClick(slot.hour), () => onOpenModal(slot.hour)}>
//         {slot.hour + ':00'}
// </div>
