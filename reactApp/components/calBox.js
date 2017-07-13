import React from 'react';
import PropTypes from 'prop-types';

const timeSlots = ['9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm']

const calBox = ({openModal, onTyping, allData, cancel}) => {
  return (
    <div>
      {timeSlots.map((slot, index) => {
        console.log(allData[index].open)
        if(allData[index].open) {
          return (
            <div key={index}>
              <span className="time"> {slot} </span>
              <center>
                <button
                  onClick={() => {
                    onTyping('key', index)
                    openModal(index)}
                  }
                  className="wordbox">
                  <span className="description"> Click to make an appointment </span>
                </button>
              </center>
            </div> )
          }

          else {
            return (
              <div key={index}>
                <span className="time"> {slot} </span>
                <center>
                  <button
                    className="wordboxclosed"

                    onClick={() => {
                      onTyping('key', index)
                      openModal(index)}}
                    >
                    <span> {allData[index].name}: {allData[index].phone}</span>
                    <span className="description">{allData[index].desc}</span>
                  </button>
                </center>
                <button
                  onClick={() => cancel(index)}
                  >Cancel</button>
              </div>
              )
            }




        })}
      </div>
    );
  };

  export default calBox;
