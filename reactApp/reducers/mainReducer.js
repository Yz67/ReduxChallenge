const constructState = () => (
  new Array(5).fill(new Array(8).fill({name: null, number: null}))
);

const reducer = (state = constructState(), action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
