const reducer = (state = {
    Mon:[
      {
        hour: 9,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 10,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 11,
        name: '',
        phone: 12,
        modalOpen: false
      },
      {
        hour: 12,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {

        hour: 1,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 2,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 3,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 4,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 5,
        name: '',
        phone: 0,
        modalOpen: false
      }
    ],
    Tues:[
      {
        hour: 9,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 10,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 11,
        name: '',
        phone: 12,
        modalOpen: false
      },
      {
        hour: 12,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 1,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 2,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 3,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 4,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 5,
        name: '',
        phone: 0,
        modalOpen: false
      }
    ],
    Wed:[
      {
        hour: 9,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 10,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 11,
        name: '',
        phone: 12,
        modalOpen: false
      },
      {
        hour: 12,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 1,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 2,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 3,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 4,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 5,
        name: '',
        phone: 0,
        modalOpen: false
      }
    ],
    Thur:[
      {
        hour: 9,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 10,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 11,
        name: '',
        phone: 12,
        modalOpen: false
      },
      {
        hour: 12,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 1,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 2,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 3,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 4,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 5,
        name: '',
        phone: 0,
        modalOpen: false
      }
    ],
    Fri:[
      {
        hour: 9,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 10,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 11,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 12,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 1,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 2,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 3,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 4,
        name: '',
        phone: 0,
        modalOpen: false
      },
      {
        hour: 5,
        name: '',
        phone: 0,
        modalOpen: false
      }
    ]
  }, action) => {
  switch(action.type){
    case 'SCHEDULE':
      let newState = {...state};
      newState[action.day].forEach((slot) => {
        if(slot.hour === action.slot.hour){
          slot = action.slot;
        }
      });
      return newState;
    default:
      return state;
  }
};

export default reducer;
