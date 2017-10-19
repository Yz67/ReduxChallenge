const dummy = [
  {time : '9', name: 'bill', 'phone': '7'},
  {time: '10'},
  {time: '11'},
  {time : '12', name: 'samantha', 'phone': '9'}
];

// {type: "SCHEDULE", index: 2, name: 'joe', phone: '8080'}
const reducer = (state = dummy, action) => {
  switch(action.type) {
    case "SCHEDULE":
    console.log(action);
      const newState = state.slice();
      newState[action.index] = Object.assign({}, newState[action.index], {name: action.name, phone: action.phone});
      return newState;
    default:
      return state;
  }
};

export default reducer;
