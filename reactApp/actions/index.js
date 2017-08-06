
export function addEvent(hour, day, name, number){
  return {
    type: 'ADD_EVENT',
    hour: hour,
    day: day,
    name: name,
    number: number
  }
}
