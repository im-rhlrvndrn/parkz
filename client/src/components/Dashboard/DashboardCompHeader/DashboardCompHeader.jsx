import React from 'react';

// SCSS files
import './DashboardCompHeader.scss';
import Settings from '../../../React-Icons/SettingsIcon';

const DashboardCompHeader = ({ navState, setIsNavOpen }) => {
    return (
        <div className='dashboardCompHeader'>
            <span className='dashboardCompHeader_left'>
                <Settings />
            </span>
            <p>{navState}</p>
            <span className='dashboardCompHeader_right' onClick={() => setIsNavOpen(true)}>
                <Settings />
            </span>
        </div>
    );
};

export default DashboardCompHeader;
