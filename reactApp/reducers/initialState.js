let initialState;

for (let i = 0; i < 7; i++) {
    initialState[i] = {
        day: 0,
        calls: []
    };
    for (let j = 0; j < 9; j++) {
        initialState[i].calls[j] = {
            time: (j + 9) % 12,
            booked: false,
            with: null,
            phone: null,
            details: null
        };
    }
}

export default initialState;
