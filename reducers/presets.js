const START_TIME = 9;           // Hour in military time (0,23)

const END_TIME = 17;            // Hour in military time (0,23)

const START_DATE = new Date();  // First day in the calendar

const NUM_DAYS = 10;             // Number of days in the calendar

const DAY_ABBREVIATIONS = {     // How we want days of the week represented in the calendar
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
};

const MONTH_ABBREVIATIONS = {   // How we want months represented in the calendar
  0: 'Jan.',
  1: 'Feb.',
  2: 'Mar.',
  3: 'Apr.',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'Aug.',
  8: 'Sept.',
  9: 'Oct.',
  10: 'Nov.',
  11: 'Dec.'
};

/////////////////////////////////////////////////////////////////////////////////////////////
export default {
  START_TIME,
  END_TIME,
  START_DATE,
  NUM_DAYS,
  DAY_ABBREVIATIONS,
  MONTH_ABBREVIATIONS
};
