import React from 'react';

// SCSS files
import './Dashboard.scss';

// React Components
import DashboardNav from './DashboardNav/DashboardNav';

const Dashboard = () => {
    return (
        <div id='dashboard'>
            <DashboardNav />
            Dashboard
        </div>
    );
};

export default Dashboard;
