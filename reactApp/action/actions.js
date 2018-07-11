export function schedule(hour, dayWeek) {
  console.log('got here', hour);
 return {
  type: 'SCHEDULE',
  slot: hour,
  day: dayWeek
 };
}
