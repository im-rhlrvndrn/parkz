import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// SCSS files
import './DashboardNav.scss';

const NavItems = ({ link, linkName }) => {
    const [activeState, setActiveState] = useState(false);
    return (
        <Link sytle={{ color: activeState && '#7ee3d9' }} to={link}>
            {linkName}
        </Link>
    );
};

const DashboardNav = () => {
    const [activeItem, setAciveItem] = useState(null);
    return (
        <div id='dashboardNav'>
            <NavItems link='/profile' linkName='profile' />
            <NavItems link='/bookings' linkName='bookings' />
            <NavItems link='/settings' linkName='settings' />
            <NavItems link='/logout' linkName='logout' />
        </div>
    );
};

export default DashboardNav;
