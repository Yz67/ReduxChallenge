const reducer = (state = [{time: 9, open: true, modal: false},
                          {time: 10, open: true, modal: false},
                          {time: 11, open: true, modal: false},
                          {time: 12, open: true, modal: false},
                          {time: 1, open: true, modal: false},
                          {time: 2, open: true, modal: false},
                          {time: 3, open: true, modal: false},
                          {time: 4, open: true, modal: false},
                          {time: 5, open: true, modal: false}], action) => {
  switch (action.type) {
    case 'MAKE_APPT':
      const newState = [ ...state ]
      newState.map((slot) => {
        if (slot.time === action.time) {
          slot.open = false
          slot.name = action.name
          slot.phone = action.phone
          slot.modal = false
        }
        console.log(slot)
        return slot
      })
      return newState
    case 'OPEN_MODAL':
      const newState2 = [ ...state ]
      newState2.map((slot) => {
        if (slot.time === action.time) {
          slot.modal = true
        }
        return slot
      })
      return newState2
    case 'CLOSE_MODAL':
      const newState3 = [ ...state ]
      newState3.map((slot) => {
        if (slot.time === action.time) {
          slot.modal = false
        }
        return slot
      })
      return newState3
    default:
      return state
  }
}

export default reducer
