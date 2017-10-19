const times = [9, 10, 11, 12, 1, 2, 3, 4, 5]
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
const initialData = {};
times.forEach(time => {
  initialData[time] = {};
  days.forEach(day => {
    initialData[time][day] = {
      modalIsOpen: false,
      name: '',
      number: ''
    }
  });
});
// console.log(initialData)
const initialState = {
  data: initialData
}
// console.log(initialState)



const reducer = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case 'OPEN_MODAL':
        var newState1 = JSON.parse(JSON.stringify(state))
        newState1.data[action.time][action.day].modalIsOpen = true
        return newState1
    case 'CLOSE_MODAL':
        var newState2 = JSON.parse(JSON.stringify(state))
        newState2.data[action.time][action.day].modalIsOpen = false
        return newState2
    case 'CHANGE_NAME':
        var newState3 = JSON.parse(JSON.stringify(state))
        newState3.data[action.time][action.day].name = action.name
        return newState3
    case 'CHANGE_NUMBER':
        var newState4 = JSON.parse(JSON.stringify(state))
        newState4.data[action.time][action.day].number = action.number
        return newState4
    default:
      return state
  }
};

export default reducer;
