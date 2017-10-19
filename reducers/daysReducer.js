import presets from './presets';
const NUM_DAYS = presets.NUM_DAYS;

var defaultDays = new Array(NUM_DAYS);
defaultDays.fill(0);

const daysReducer = (state = defaultDays, action) => {
    /*switch (action.type) {
        default:
            return state;
    }*/
    return state;
};

export default daysReducer;
