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

       case 'OPEN_MODAL':
      //  console.log("this is actionid", action.id);
          const newState1 = {...state,
            modal: {...state.modal,
              modifier: action.id, ////////////////////**** -9
              open: true,
              inputText: state.array[action.id - 9].text,
              inputNumber: state.array[action.id - 9].number
            }
          };
          // newState2.modal = Object.assign({}, {
          //   modifier: action.id,
          //   open: !state.modal.open
          // })
          console.log("this is open modal", newState1);
          return newState1;

      case 'CLOSE_MODAL':
      // console.log("about to close modal", state.array);
         const newState2 = {...state,
           modal: {...state.modal,
             open: false
           }
         };
         console.log("this is closed modal", newState2);
         return newState2;

       case 'UPDATE_MODAL_TEXT':
          const newState3 = Object.assign({}, state);
          // console.log(action.event.target.value);
          // console.log(state);
          newState3.modal = Object.assign({}, state.modal, {
            inputText: action.event.target.value
          })
          // newState3.modal.inputText = action.event.target.value;
          return newState3;

      case 'UPDATE_MODAL_NUMBER':
          const newState4 = Object.assign({}, state);
          // console.log(action.event.target.value);
          // console.log(state);
          newState4.modal = Object.assign({}, state.modal, {
            inputNumber: action.event.target.value
          })

         return newState4;

       case 'SAVE_MODAL':
       console.log("entering SAVE_MODAL ", state);
          const newState5 = Object.assign({}, state);
          const arr = Object.assign([], state.array);
          console.log("this is arr", arr);
          for(var i = 0; i < arr.length; i++){
            if(arr[i].id === newState5.modal.modifier){
              console.log("inside SAVE_MODAL forloop")
               arr[i].text = newState5.modal.inputText;
               arr[i].number = newState5.modal.inputNumber;
               arr[i].available = false;
               arr[i].class = 'booked';
               console.log("modal has been saved into appointments", newState5.array[i])
               newState5.modal.inputText = '';
               newState5.modal.inputNumber = '';
             } else {}
          }

          return newState5;

        case 'CANCEL_APPOINTMENT':
            const newState6 = Object.assign({}, state);
            const arr2 = Object.assign([], state.array);

            for(var i = 0; i < arr2.length; i++){
              if(arr2[i].id === newState6.modal.modifier){
                console.log("inside SAVE_MODAL forloop")
                 arr2[i].text = '';
                 arr2[i].number = '';
                 arr2[i].available = true;
                 arr2[i].class = 'available';
                 console.log("appointment has been canceled", newState6.array[i])
                 newState6.modal.inputText = '';
                 newState6.modal.inputNumber = '';
               } else {}
            }
           return newState6;

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
   {id: 9, available: true, class: 'available', text: '', number: ''},
   {id: 10, available: true, class: 'available', text: '', number: ''},
   {id: 11, available: true, class: 'available', text: '', number: ''},
   {id: 12, available: true, class: 'available', text: '', number: ''},
   {id: 13, available: true, class: 'available', text: '', number: ''},
   {id: 14, available: true, class: 'available', text: '', number: ''},
   {id: 15, available: true, class: 'available', text: '', number: ''},
   {id: 16, available: true, class: 'available', text: '', number: ''}
 ],
 modal: {id: 'modal', class: 'modalClass', open: false, inputText: '', inputNumber: '', modifier: '123'}
}
