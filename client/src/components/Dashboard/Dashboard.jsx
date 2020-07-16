import React, { useState } from 'react';

// SCSS files
import './Dashboard.scss';

// React Components
import DashboardNav from './DashboardNav/DashboardNav';
import Profile from './Profile/Profile';
import Listings from './Listings/Listings';

const Dashboard = (props) => {
    // const [navState, setNavState] = useState('profile');
    const navState = props.match.params.navState;
    const username = props.match.params.username;
    return (
        <div id='dashboard'>
            <DashboardNav />
            <div className='dashboardCompWrapper'>
                {navState === 'listings' ? (
                    <Listings />
                ) : username === 'im_rhlrvndrn' ? (
                    <Profile />
                ) : null}
            </div>
        </div>
    );
};

export default Dashboard;
