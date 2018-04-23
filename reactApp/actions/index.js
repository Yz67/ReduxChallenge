export function addApptAction(day, hour, person, phone){
    return {
        type: 'ADD_APPT',
        day,
        hour,
        person,
        phone
    }
}

export function noApptAction(day, hour){
    return {
        type: 'NO_APPT',
        day,
        hour,
    }
}
