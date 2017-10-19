const initialState = {
  month: '',
  week: 0
}

export function selectMonthReducer(month) {
 return {
  type: 'SELECT_MONTH',
  month,
  week: 0,
 };
}

export function selectWeekReducer(week) {
 return {
  type: 'SELECT_WEEK',
  week,
 };
}

export function selectDayReducer(day) {
 return {
  type: 'SELECT_DAY',
  day,
 };
}
 export function openModalReducer() {
   return {
     type: 'OPEN_REDUCER'
   }
 };

 export function closeModalReducer() {
   return {
     type: 'CLOSE_REDUCER'
   };
}
