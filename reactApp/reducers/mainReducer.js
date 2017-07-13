//root reducer goes on this page
// copy new state so no mutations to old state

//modal isOpen = means its open use this

const reducer = (state = initialState, action) => {
   switch (action.type) {

      //  case 'ADD_CALL':
      //      const newState = Object.assign({}, state);
      //      newState.array.map(function(current, index){
      //        if(action.id === current.id){
      //          if(current.class === 'available'){
      //            current.class = 'booked';
      //          } else if(current.class === 'booked'){
      //            current.class = 'available';
      //          }
      //        }
      //      })
      //      return newState;

       case 'TOGGLE_MODAL':
          const newState2 = {...state,
            modal: {...state.model,
              modifier: action.id,
              open: !state.modal.open
            }
          };
          // newState2.modal = Object.assign({}, {
          //   modifier: action.id,
          //   open: !state.modal.open
          // })
          console.log("this is toggled modal", newState2);
          return newState2;

       case 'UPDATE_MODAL_TEXT':
          const newState3 = Object.assign({}, state);
          newState3.modal.inputText = action.event.target.value;
          return newState3;

      case 'UPDATE_MODAL_NUMBER':
         const newState4 = Object.assign({}, state);
         newState4.modal.inputNumber = action.event.target.value;
         return newState4;

       case 'SAVE_MODAL':
          const newState5 = Object.assign({}, state);
          newState5.array.map(function(current, index){
            if(current.id === newState5.modal.modifier){
              current.text = newState5.modal.inputText;
              current.number = newState5.modal.inputNumber;
              current.available = false;
              current.class = 'booked';
              console.log("modal has been saved");
            }
          })
          return newState5;

       default:
           return state;
   }
};

export default reducer;
//type

// const initialState = Array(8).fill({timeslot: 0, available: true, text: 'make appointment', class: 'available' })
// const initialState = [
//  {id: 9, available: true, class: 'available', text: 'make appointment'},
//  {id: 10, available: true, class: 'available', text: 'make appointment'},
//  {id: 11, available: true, class: 'available', text: 'make appointment'},
//  {id: 12, available: true, class: 'available', text: 'make appointment'},
//  {id: 13, available: true, class: 'available', text: 'make appointment'},
//  {id: 14, available: true, class: 'available', text: 'make appointment'},
//  {id: 15, available: true, class: 'available', text: 'make appointment'},
//  {id: 16, available: true, class: 'available', text: 'make appointment'},
//  {id: 'modal', class: 'modalClass', open: false, inputText: '', inputNumber: ''}
// ]

const initialState = {
  array: [
   {id: 9, available: true, class: 'available', text: 'available', number: ''},
   {id: 10, available: true, class: 'available', text: 'available', number: ''},
   {id: 11, available: true, class: 'available', text: 'available', number: ''},
   {id: 12, available: true, class: 'available', text: 'available', number: ''},
   {id: 13, available: true, class: 'available', text: 'available', number: ''},
   {id: 14, available: true, class: 'available', text: 'available', number: ''},
   {id: 15, available: true, class: 'available', text: 'available', number: ''},
   {id: 16, available: true, class: 'available', text: 'available', number: ''}
 ],
 modal: {id: 'modal', class: 'modalClass', open: false, inputText: '', inputNumber: '', modifier: ''}
}





// filter//array.find or array.filter
//state.map
