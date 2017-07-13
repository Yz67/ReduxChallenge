//SET DEFAULT STATE APPROPRIATELY
const initState = {
  nameInput: '',
  phoneInput: '',
  modalIsOpen: false,         //if the modal is open
  idModal: -1,                //which id the modal is open for. -1 if not open for any
  timeSlots: [
    {hour: 9, scheduled: false, nameInput: '', phoneInput: ''},
    {hour: 10, scheduled: false, nameInput: '', phoneInput: ''},
    {hour: 11, scheduled: false, nameInput: '', phoneInput: ''},
    {hour: 12, scheduled: false, nameInput: '', phoneInput: ''},
    {hour: 1, scheduled: false, nameInput: '', phoneInput: ''},
    {hour: 2, scheduled: false, nameInput: '', phoneInput: ''},
    {hour: 3, scheduled: false, nameInput: '', phoneInput: ''},
    {hour: 4, scheduled: false, nameInput: '', phoneInput: ''}
  ]
}

function getIndex(hour){
  if(hour <= 12 && hour >= 9){
    return hour - 9;
  }else if(hour >=1 && hour <=4){
    return hour + 3;
  }
}


const mainReducer = (state = initState, action) => {
   //SWITCH STATEMENT TO HANDLE ACTIONS GOES HERE
   let stateCopy;

   switch(action.type) {
     case 'HOUR_CLICK':
        // console.log(state)
        stateCopy = state.timeSlots.slice();
        // console.log(stateCopy)
        for(var i = 0; i < stateCopy.length; i++){
          if(action.id === stateCopy[i].hour){
              stateCopy[i].scheduled = !stateCopy[i].scheduled;
          }
        }
        // console.log(stateCopy);

        //need to put it back in object so that it is the same
        return {
          modalIsOpen: state.modalIsOpen,
          idModal: state.idModal,
          timeSlots: stateCopy,
          nameInput: state.nameInput,
          phoneInput: state.phoneInput
        };

     case 'OPEN_MODAL':

        return {
          modalIsOpen: !state.modalIsOpen,
          idModal: action.id,
          timeSlots: state.timeSlots,
          nameInput: state.nameInput,
          phoneInput: state.phoneInput
        }

      case 'CLOSE_MODAL':
        stateCopy = state.timeSlots.slice();
        let index = getIndex(state.idModal);

        //update that individuals NAMEINPUT AND PHONEINPUT according to state.idModal
        stateCopy[index].nameInput = state.nameInput;
        stateCopy[index].phoneInput = state.phoneInput;

        return {
          modalIsOpen: !state.modalIsOpen,
          idModal: -1,
          timeSlots: stateCopy,
          nameInput: '',
          phoneInput: ''
        }

      case 'NAME_CHANGE':
        return {
          modalIsOpen: state.modalIsOpen,
          idModal: state.idModal,
          timeSlots: state.timeSlots,
          nameInput: action.name,
          phoneInput: state.phoneInput
        }

      case 'PHONE_CHANGE':
        return {
          modalIsOpen: state.modalIsOpen,
          idModal: state.idModal,
          timeSlots: state.timeSlots,
          nameInput: state.nameInput,
          phoneInput: action.phone
        }

     default:
        return state;
   }
};

export default mainReducer;
