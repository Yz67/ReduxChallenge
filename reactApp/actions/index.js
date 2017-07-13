export function onTyping(key, letters) {
    return {
        type: 'TYPE',
        key,
        letters,
    };
}

export function onSubmit(index, data) {
    return {
        type: 'SUBMIT',
        data,
        index,
    };
}

export function cancel(index) {
    return {
        type: 'CANCEL',
        index,
    };
}
