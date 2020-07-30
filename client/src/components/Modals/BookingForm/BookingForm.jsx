import React, { useEffect } from 'react';
import { gsap } from 'gsap';

// SCSS files
import './BookingForm.scss';

// React Components
import AuthInput from '../../Auth/AuthInputs/AuthInput';

const BookingForm = ({ setIsBookingFormActive, isBookingFormActive }) => {
    let t1 = gsap.timeline();
    useEffect(() => {
        gsap.to('.bookingFormOverlay', 0, { css: { visibility: 'visible' } });
        t1.from('#bookingForm', {
            duration: 0.4,
            opacity: 0,
            y: '-30px',
            ease: 'power3.InOut',
        });
    }, [isBookingFormActive]);

    return (
        <div className='bookingFormOverlay'>
            <form id='bookingForm'>
                <AuthInput htmlFor='slotNo' />
                {/* <AuthInput htmlFor='bookingDate' type='date' /> */}
                <div className='subFormGroup'>
                    <AuthInput htmlFor='day' type='number' />
                    <AuthInput htmlFor='month' type='number' />
                    <AuthInput htmlFor='year' type='number' />
                </div>
                <AuthInput htmlFor='startTime' />
                <AuthInput htmlFor='endTime' />
                <AuthInput
                    htmlFor='slot floor'
                    type='dropdown'
                    dropdownItems={[{ name: 'kldfja' }]}
                />
                <button type='submit'>Book slot</button>
            </form>
        </div>
    );
};

export default BookingForm;
