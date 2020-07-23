import React from 'react';
import { NavLink } from 'react-router-dom';

// SCSS files
import './DashboardNav.scss';

// Utils
import useWindowSize from '../../../utils/useWindowSize';

const DashboardNav = ({ isNavOpen }) => {
    let windowSize = useWindowSize();

    return (
        <>
            {(isNavOpen || windowSize.width > 1100) && (
                <div id='dashboardNav'>
                    <div className='dashboardNavWrapper'>
                        <NavLink to='/user/im_rhlrvndrn'>profile</NavLink>
                        <NavLink to='/listings/im_rhlrvndrn'>find a parking slot</NavLink>
                        <NavLink to='/bookings/im_rhlrvndrn'>bookings</NavLink>
                        <NavLink to='/settings/im_rhlrvndrn'>settings</NavLink>
                        <NavLink to='/logout'>logout</NavLink>
                    </div>
                </div>
            )}
        </>
    );
};

export default DashboardNav;
