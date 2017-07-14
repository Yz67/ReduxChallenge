

const appReducer = (state = {
  selected: '',
  mon: [
    {hour: 9, booked: {name: '', num: ''}},
    {hour: 10, booked: {name: '', num: ''}},
    {hour: 11, booked: {name: '', num: ''}},
    {hour: 12, booked: {name: '', num: ''}},
    {hour: 13, booked: {name: '', num: ''}},
    {hour: 14, booked: {name: '', num: ''}},
    {hour: 15, booked: {name: '', num: ''}},
    {hour: 16, booked: {name: '', num: ''}},
    {hour: 17, booked: {name: '', num: ''}}
  ],
  tue: [
    {hour: 9, booked: {name: '', num: ''}},
    {hour: 10, booked: {name: '', num: ''}},
    {hour: 11, booked: {name: '', num: ''}},
    {hour: 12, booked: {name: '', num: ''}},
    {hour: 13, booked: {name: '', num: ''}},
    {hour: 14, booked: {name: '', num: ''}},
    {hour: 15, booked: {name: '', num: ''}},
    {hour: 16, booked: {name: '', num: ''}},
    {hour: 17, booked: {name: '', num: ''}}
  ],
  wed: [
    {hour: 9, booked: {name: '', num: ''}},
    {hour: 10, booked: {name: '', num: ''}},
    {hour: 11, booked: {name: '', num: ''}},
    {hour: 12, booked: {name: '', num: ''}},
    {hour: 13, booked: {name: '', num: ''}},
    {hour: 14, booked: {name: '', num: ''}},
    {hour: 15, booked: {name: '', num: ''}},
    {hour: 16, booked: {name: '', num: ''}},
    {hour: 17, booked: {name: '', num: ''}}
  ],
  thurs: [
    {hour: 9, booked: {name: '', num: ''}},
    {hour: 10, booked: {name: '', num: ''}},
    {hour: 11, booked: {name: '', num: ''}},
    {hour: 12, booked: {name: '', num: ''}},
    {hour: 13, booked: {name: '', num: ''}},
    {hour: 14, booked: {name: '', num: ''}},
    {hour: 15, booked: {name: '', num: ''}},
    {hour: 16, booked: {name: '', num: ''}},
    {hour: 17, booked: {name: '', num: ''}}
  ],
  fri: [
    {hour: 9, booked: {name: '', num: ''}},
    {hour: 10, booked: {name: '', num: ''}},
    {hour: 11, booked: {name: '', num: ''}},
    {hour: 12, booked: {name: '', num: ''}},
    {hour: 13, booked: {name: '', num: ''}},
    {hour: 14, booked: {name: '', num: ''}},
    {hour: 15, booked: {name: '', num: ''}},
    {hour: 16, booked: {name: '', num: ''}},
    {hour: 17, booked: {name: '', num: ''}}
  ],
  sat: [
    {hour: 9, booked: {name: '', num: ''}},
    {hour: 10, booked: {name: '', num: ''}},
    {hour: 11, booked: {name: '', num: ''}},
    {hour: 12, booked: {name: '', num: ''}},
    {hour: 13, booked: {name: '', num: ''}},
    {hour: 14, booked: {name: '', num: ''}},
    {hour: 15, booked: {name: '', num: ''}},
    {hour: 16, booked: {name: '', num: ''}},
    {hour: 17, booked: {name: '', num: ''}}
  ],
  sun: [
    {hour: 9, booked: {name: '', num: ''}},
    {hour: 10, booked: {name: '', num: ''}},
    {hour: 11, booked: {name: '', num: ''}},
    {hour: 12, booked: {name: '', num: ''}},
    {hour: 13, booked: {name: '', num: ''}},
    {hour: 14, booked: {name: '', num: ''}},
    {hour: 15, booked: {name: '', num: ''}},
    {hour: 16, booked: {name: '', num: ''}},
    {hour: 17, booked: {name: '', num: ''}}
  ],
}, action) => {
    const data = Object.assign({}, state);
    console.log('fsfssdfsdfhghyhhgjgmgg',data)
    switch (action.type) {
        case 'SELECT_DAY':
          const day = action.day;
          data['selected'] = day;
          return data;
        case 'NAME_CHANGE':
          const newName = action.name;
          const hour = action.hour;


          const dayData = data[data['selected']];
          dayData.forEach((day) => {
            if(day.hour === hour){
              day.booked.name = newName
            }
          })
          return data;
        case 'NUMBER_CHANGE':
          const newNumber = action.number;
          const hour1 = action.hour;
          const dayData1 = data[data['selected']];
          dayData1.forEach((day) => {
            if(day.hour === hour1){
              day.booked.num = newNumber
            }
          })
          return data;
        default:
          data['selected'] = 'mon'
          return data;
    }
};

export default appReducer;
