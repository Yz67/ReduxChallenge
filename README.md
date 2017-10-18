# React Takehome App: Scheduler

## Functionality Overview
Per the assignment specs, the app contained within this repo:

1. Lists 8 timeslots for appointments on a specific date
2. The timeslots display whether or not there is an         appointment in that timeslot

    * If there is no appointment, the timeslot will be colored green and labelled "open"

    * If there is an appointment, the timeslot will be colored blue and labelled with the
    name of the person who made the appointment
3. Clicking on an appointment:
    * if there is no appointment, opens a modal that allows an appointment to be made, checking
    that the fields for name and phone number are _not_ empty (submission of an empty form
    will flash an error and users can cancel out of the modal to leave the timeslot unchanged)

    * if there is an appointment, opens a modal populated with the current information of the
    person who made the appointment, allowing for editing (an option to clear the timeslot
    of its appointment is available)

4. Users can navigate in a 7 day period (default starting from today's date, there is an option
        to set what the beginning of this period is)


## Design Choices
In line with some of the remarks made [here](https://gist.github.com/chantastic/fc9e3853464dffdb1e3c),
I've decided to _completely_ separate the so called `presentational components` and `container components`.
I've included a flowchart with arrows pointing from parent to child components marking presentational components
as circles and container components as squares.

![design flowchart](/img/ReactReduxTakehome.png)