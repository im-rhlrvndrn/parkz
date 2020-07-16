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
                <NavLink to='/listings/im_rhlrvndrn'>listings</NavLink>
                <NavLink to='/bookings/im_rhlrvndrn'>bookings</NavLink>
                <NavLink to='/settings/im_rhlrvndrn'>settings</NavLink>
                <NavLink to='/logout'>logout</NavLink>
            </div>
        </div>
    );
};

export default DashboardNav;
