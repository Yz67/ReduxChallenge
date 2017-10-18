const constructState = () => (
  new Array(5).fill(new Array(8).fill({name: null, number: null}))
);

const reducer = (state = constructState(), action) => {
  switch (action.type) {
    case 'UPDATE':
      let copy = state.map(day => (
        day.map(hour => (
          Object.assign({}, hour)
        ))
      ));
      copy[action.position.day][action.position.hour] = {
        name: action.name,
        number: action.number
      };
      return copy;
    default:
      return state;
  }
};

export default reducer;
