import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// SCSS files
import './DashboardNav.scss';

const DashboardNav = () => {
    const [activeItem, setAciveItem] = useState(null);
    return (
        <div id='dashboardNav'>
            <NavLink to='/profile'>profile</NavLink>
            <NavLink to='/bookings'>bookings</NavLink>
            <NavLink to='/settings'>settings</NavLink>
            <NavLink to='/logout'>logout</NavLink>
        </div>
    );
};

export default DashboardNav;
