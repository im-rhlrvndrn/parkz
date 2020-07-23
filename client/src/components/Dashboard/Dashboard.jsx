import React, { useState } from 'react';

// SCSS files
import './Dashboard.scss';

// React Components
import DashboardNav from './DashboardNav/DashboardNav';
import Profile from './Profile/Profile';
import Listings from './Listings/Listings';
import Bookings from './Bookings/Bookings';

const Dashboard = (props) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const navState = props.match.params.navState;
    const username = props.match.params.username;
    return (
        <div id='dashboard'>
            <DashboardNav isNavOpen={isNavOpen} />
            <div className='dashboardCompWrapper'>
                {navState === 'listings' ? (
                    <Listings setIsNavOpen={setIsNavOpen} navState={navState} username={username} />
                ) : navState === 'user' ? (
                    <Profile setIsNavOpen={setIsNavOpen} navState={navState} />
                ) : navState === 'bookings' ? (
                    <Bookings setIsNavOpen={setIsNavOpen} navState={navState} />
                ) : null}
            </div>
        </div>
    );
};

export default Dashboard;
