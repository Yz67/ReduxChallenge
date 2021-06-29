let initialSlotObj = {
  modalOpened: false,
  name: '',
  number: ''
};

let initialDayArray = Array(8).fill(initialSlotObj);
console.log("Array representing each day: ", initialDayArray);

let initialState = Array(5).fill(initialDayArray);
console.log("Array representing entire week: ", initialState);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      const newState = state.map((array) => {
        return array.slice()
      });
      console.log("Action: ", action);
      let obj = newState[action.day][action.slot];
      console.log("Object selected: ", obj);
      obj.modalOpened = true
      return newState;
    case 'UPDATE_SLOT':
      const newState2 = state.map((array) => {
        return array.slice()
      });
      let obj2 = newState2[action.day][action.slot];
      obj2.name = action.newName;
      obj2.number = action.newNum;
      obj2.modalOpened = false;
      return newState2;
    default:
      return state
  }
}

export default reducer;
