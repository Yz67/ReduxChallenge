import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
let name = '';
let phone = 0;
function onChangeName(e){
  name = e.target.value;
}
function onChangeNum(e){
  phone = e.target.value;
}
const setStyle ={
  margin: '10px',
  backgroundColor: 'lightgreen',
  border: '5px solid lightgreen',
  borderRadius: '5px',
  width: '350px'
}
const changeStyle={
  margin: '10px',
  backgroundColor: 'lightpink',
  border: '5px solid lightpink',
  borderRadius: '5px',
  width: '350px'
}
const Slot = ({scheduleClick, dayWeek, hour}) => (hour.name.length > 0 || hour.phone.length > 0) ?
(
  <button style={changeStyle} onClick={() => {
    hour.modalOpen = true;
    scheduleClick(hour, dayWeek)}}> Change Schedule for {hour.name} at {hour.hour}:00{(hour.hour < 9 || hour.hour > 11) ? "PM" : "AM"}
    <Modal
      isOpen={hour.modalOpen}
      style={customStyles}
      contentLabel="Example Modal"
      >
        <h2>Schedule for {dayWeek} at {hour.hour}:00{(hour.hour < 9 || hour.hour > 11) ? "PM" : "AM"}</h2>
          <input type="text" name="name" onChange={(e)=>onChangeName(e)} defaultValue={hour.name}/>
          <input type="text" name="phone" onChange={(e)=>onChangeNum(e)} defaultValue={hour.phone}/>
          <button onClick={() => {
            hour.modalOpen = false;
            hour.name = name;
            hour.phone = phone;
            scheduleClick(hour, dayWeek)}}>Update</button>
      </Modal>
  </button>
) :
(
  <button style={setStyle} onClick={() => {
    hour.modalOpen = true;
    scheduleClick(hour, dayWeek)}}> Set Schedule for {hour.hour}:00{(hour.hour < 9 || hour.hour > 11) ? "PM" : "AM"}
    <Modal
      isOpen={hour.modalOpen}
      style={customStyles}
      contentLabel="Example Modal"
      >
        <h2>Schedule for {dayWeek} at {hour.hour}:00{(hour.hour < 9 || hour.hour > 11) ? "PM" : "AM"}</h2>
          <input type="text" name="name" onChange={(e)=>onChangeName(e)} placeholder="Name" />
          <input type="text" name="phone" onChange={(e)=>onChangeNum(e)} placeholder="Phone number" />
          <button onClick={() => {
            hour.modalOpen = false;
            hour.name = name;
            hour.phone = phone;
            scheduleClick(hour, dayWeek)}}>Update</button>
            <button onClick={() => {
              hour.modalOpen = false;
              scheduleClick(hour, dayWeek)
            }}>Cancel</button>
      </Modal>
  </button>
);

export default Slot;
