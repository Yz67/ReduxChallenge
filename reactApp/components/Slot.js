import React from 'react';

let Slot = ({scheduled, hour,  onOpenModal, name, phone}) => {

    return (
      scheduled ?

        <div
          // key = {hour}
          style = {styleScheduled}
          onClick={ () => onOpenModal(hour)}>

            <div>{hour + ':00'}</div>
            <div>{name}</div>
            <div>{phone}</div>


        </div>

      :

        <div
          //key = {hour}
          style = {styleNotScheduled}
          onClick={ () => onOpenModal(hour)}>

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
