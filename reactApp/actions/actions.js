import types from './types';

export default {
    clickTime: ( person, phone, day, time ) => {
        return { type: types.clickTime, person, phone, day, time };
    },
    handlePersonChange: ( val ) => {
        return { type: types.personChange, new: val };
    },
    handlePhoneChange: ( val ) => {
        return { type: types.phoneChange, new: val };
    },
    handleSubmit: ( person, phone, day, time ) => {
        return { type: types.submit, person, phone, day, time };
    },
    addDay: () => {
        return { type: types.addDay };
    },
    cancel: () => {
        return { type: types.cancel };
    }
};
