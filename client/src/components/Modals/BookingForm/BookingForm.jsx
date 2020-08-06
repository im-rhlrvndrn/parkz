import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { gsap } from 'gsap';

// SCSS files
import './BookingForm.scss';

// React Components
import AuthInput from '../../Auth/AuthInputs/AuthInput';

const BookingForm = ({ parkinglotDetails, username }) => {
    let t1 = gsap.timeline();
    const history = useHistory();
    useEffect(() => {
        t1.from('.parking_lot_details', {
            duration: 0.4,
            opacity: 0,
            y: '-30px',
            ease: 'power3.InOut',
        });

        if (!parkinglotDetails.img) history.push(`/listings/${username}`);
    }, []);

    return (
        <div className='bookingForm'>
            <h1>New booking</h1>
            <div className='parking_lot_details'>
                <img src={parkinglotDetails.img} alt='' />
                <div className='parkinglot_info'>
                    <h1>{parkinglotDetails.name}</h1>
                    <p>{parkinglotDetails.location}</p>
                </div>
            </div>
            <form id='bookingForm'>
                <div className='subFormGroup'>
                    <AuthInput htmlFor='slotNo' required />
                    <AuthInput
                        htmlFor='slot floor'
                        type='dropdown'
                        dropdownItems={['Basement', 1, 2, 3, 4]}
                        required
                    />
                </div>
                <div className='subFormGroup'>
                    <AuthInput htmlFor='day' type='number' required />
                    <AuthInput htmlFor='month' type='number' required />
                    <AuthInput htmlFor='year' type='number' required />
                </div>
                <div className='subFormGroup'>
                    <AuthInput htmlFor='arrival time' required />
                    <AuthInput htmlFor='leaving time' required />
                </div>
                <button type='submit'>Book slot</button>
            </form>
        </div>
    );
};

export default BookingForm;
