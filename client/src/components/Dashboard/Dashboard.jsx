import React, { useState } from 'react';

// SCSS files
import './Dashboard.scss';

// React Components
import DashboardNav from './DashboardNav/DashboardNav';
import Profile from './Profile/Profile';

const Dashboard = () => {
    const [navState, setNavState] = useState('profile');
    return (
        <div id='dashboard'>
            <DashboardNav />
            <div className='dashboardCompWrapper'>
                {navState === 'profile' ? <Profile /> : null}
            </div>
        </div>
    );
};

export default Dashboard;
