import React from 'react';
import PropTypes from 'prop-types';

const Modal = ( { person, phone, day, time, handlePhoneChange, handlePersonChange, handleSubmit } ) => {
    return (
        <div className="Modal">
            <p>Add appointment...</p>
            <input
                type="text"
                value={ person }
                onChange={ (e) => handlePersonChange(e.target.value) }
                placeholder="Your Name"
            />
            <input
                type="text"
                value={ phone }
                onChange={ (e) => handlePhoneChange(e.target.value) }
                placeholder="Phone Number"
            />
            <button onClick={() => handleSubmit(person, phone, day, time)}>Submit</button>
        </div>
    );
};

Modal.propTypes = {
    person: PropTypes.string,
    phone: PropTypes.string,
    time: PropTypes.number,
    day: PropTypes.number,
    display: PropTypes.bool,
    handlePersonChange: PropTypes.func,
    handlePhoneChange: PropTypes.func,
    handleSubmit: PropTypes.func
};

export default Modal;
