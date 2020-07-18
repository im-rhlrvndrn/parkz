import React from 'react';

// SCSS files
import './Dashboard.scss';

// React Components
import DashboardNav from './DashboardNav/DashboardNav';
import Profile from './Profile/Profile';
import Listings from './Listings/Listings';
import Bookings from './Bookings/Bookings';

const Dashboard = (props) => {
    const navState = props.match.params.navState;
    const username = props.match.params.username;
    return (
        <div id='dashboard'>
            <DashboardNav />
            <div className='dashboardCompWrapper'>
                {navState === 'listings' ? (
                    <Listings username={username} />
                ) : navState === 'user' ? (
                    <Profile />
                ) : navState === 'bookings' ? (
                    <Bookings />
                ) : null}
            </div>
        </div>
    );
};

export default Dashboard;
