import React from 'react';

// SCSS files
import './Bookings.scss';

const Bookings = () => {
    return (
        <>
            <h1>Your Bookings</h1>
            <div className='bookingOverview'>
                <div className='bookingOverview_details'>
                    <h2>Ongoing Bookings</h2>
                    <span className='bookingOverview_stats'>24</span>
                </div>
                <div className='bookingOverview_details'>
                    <h2>Ongoing Bookings</h2>
                    <span className='bookingOverview_stats'>24</span>
                </div>
                <div className='bookingOverview_details'>
                    <h2>Ongoing Bookings</h2>
                    <span className='bookingOverview_stats'>24</span>
                </div>
            </div>
        </>
    );
};

export default Bookings;
