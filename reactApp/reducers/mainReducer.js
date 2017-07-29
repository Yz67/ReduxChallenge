
const generateTimeSlot = (hour) => {
  return {
    hour: hour,
    available: true,
    name: '',
    phoneNumber: ''
  };
};

const generateDay = (name) => {
  return {
    name: name,
    timeSlots: [
      generateTimeSlot('9'),
      generateTimeSlot('10'),
      generateTimeSlot('11'),
      generateTimeSlot('12'),
      generateTimeSlot('1'),
      generateTimeSlot('2'),
      generateTimeSlot('3'),
      generateTimeSlot('4'),
    ]
  };
};

const initialSchedule = [
  generateDay('Monday'),
  generateDay('Tuesday'),
  generateDay('Wednesday'),
  generateDay('Thursday'),
  generateDay('Friday'),
  generateDay('Sunday')
];

const initialModal = {
  isOpen: false,
  dayName: '',
  hour: '',
  name: '',
  phoneNumber: ''
}

const initialState = {
  schedule: initialSchedule,
  modal: initialModal
}

const mainReducer = (state = initialState, action) => {
  let newState;
  let day;
  let timeSlot;
  switch (action.type) {
    case 'TIME_SLOT_CLICK':
      newState = JSON.parse(JSON.stringify(state));
      newState.modal.isOpen = true;
      newState.modal.dayName = action.dayName;
      newState.modal.hour = action.hour;
      day = newState.schedule.find(day => (
        day.name === newState.modal.dayName
      ));
      timeSlot = day.timeSlots.find(timeSlot => (
        timeSlot.hour === newState.modal.hour
      ));
      newState.modal.name = timeSlot.name;
      newState.modal.phoneNumber = timeSlot.phoneNumber;
      return newState;
    case 'HANDLE_NAME_CHANGE':
      newState = JSON.parse(JSON.stringify(state));
      newState.modal.name = action.name;
      return newState;
    case 'HANDLE_PHONE_NUMBER_CHANGE':
      newState = JSON.parse(JSON.stringify(state));
      newState.modal.phoneNumber = action.phoneNumber;
      return newState;
    case 'HANDLE_SUBMIT':
      newState = JSON.parse(JSON.stringify(state));
      day = newState.schedule.find(day => (
        day.name === newState.modal.dayName
      ));
      timeSlot = day.timeSlots.find(timeSlot => (
        timeSlot.hour === newState.modal.hour
      ));
      timeSlot.name = newState.modal.name;
      timeSlot.phoneNumber = newState.modal.phoneNumber;
      timeSlot.available = timeSlot.name === '' && timeSlot.phoneNumber === '';
      newState.modal.isOpen = false;
      return newState;
    case 'HANDLE_CANCEL':
      newState = JSON.parse(JSON.stringify(state));
      newState.modal.isOpen = false;
      return newState;
    default:
      return state;
  }
};

export default mainReducer;
