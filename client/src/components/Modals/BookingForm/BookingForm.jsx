import React from 'react';

// SCSS files
import './BookingForm.scss';

// React Components
import AuthInput from '../../Auth/AuthInputs/AuthInput';

const BookingForm = (props) => {
    return (
        <form id='bookingForm'>
            <AuthInput htmlFor='slotNo' />
            <AuthInput htmlFor='bookingDate' />
            <AuthInput htmlFor='startTime' />
            <AuthInput htmlFor='endTime' />
        </form>
    );
};

export default BookingForm;
