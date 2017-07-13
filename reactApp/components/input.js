import React from 'react';
import PropTypes from 'prop-types';

const Input = ({isOpen, closeModal, onTyping, modalKey, onSubmit, currentData, allData}) => {
    if(isOpen) {
      return (
        <center><div className="form">
          Schedule Meeting
          <input
            className="inputbox"
            placeholder="Name"
            value={allData[currentData.key].name}
            onChange={(e) => onTyping('name', e.target.value)}
            >
          </input>
          <input
            className="inputbox"
            placeholder="Phone Number"
            value={allData[currentData.key].phone}
            onChange={(e) => onTyping('phone', e.target.value)}>
          </input>
          <input
            className="inputbox"
            placeholder="Description"
            value={allData[currentData.key].desc}
            onChange={(e) => onTyping('desc', e.target.value)}>
          </input>
          <button
            onClick={() => {
              onTyping('open', false)
              onSubmit(currentData.key, currentData)
              closeModal()}} >
            Submit Event
          </button>
        </div></center>
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }

export default Input;
