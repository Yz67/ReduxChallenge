/* Add your actions here */

function hourClick(id) {
    return {
      type: 'HOUR_CLICK',
      id
    };
}

function openModal(id){
  return {
    type: 'OPEN_MODAL',
    id
  }
}

function closeModal(){
  return {
    type: 'CLOSE_MODAL'
  }
}

function nameChange(name){
  return {
    type: 'NAME_CHANGE',
    name
  }
}

function phoneChange(phone){
  return {
    type: "PHONE_CHANGE",
    phone
  }
}

export {hourClick, openModal, closeModal, nameChange, phoneChange}
