function handleSubmit(tag, name, phone) {
    return {
        type: 'NEW_ENTRY',
        tag,
        name,
        phone
    };
}

function handleDelete(tag) {
    return {
        type: 'DELETE_ENTRY',
        tag
    };
}

export {handleSubmit, handleDelete};
