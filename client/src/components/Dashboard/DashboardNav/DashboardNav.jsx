import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// SCSS files
import './DashboardNav.scss';

const DashboardNav = () => {
    const [activeItem, setAciveItem] = useState(null);
    return (
        <div id='dashboardNav'>
            <div className='dashboardNavWrapper'>
                <NavLink to='/im_rhlrvndrn'>profile</NavLink>
                <NavLink to='/bookings'>bookings</NavLink>
                <NavLink to='/settings'>settings</NavLink>
                <NavLink to='/logout'>logout</NavLink>
            </div>
        </div>
    );
};

export default DashboardNav;
