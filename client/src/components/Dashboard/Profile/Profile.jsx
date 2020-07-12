import React from 'react';

// SCSS files
import './Profile.scss';

// React components
import Settings from '../../../React-Icons/Settings';

const Profile = () => {
    return (
        <>
            <div className='profile'>
                <div className='profile_header'>
                    <img
                        src='https://images.pexels.com/photos/3465204/pexels-photo-3465204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        alt=''
                    />
                    <div className='profile_header_info'>
                        <h1>
                            Rahul Ravindran <Settings fill='#00D5C2' />
                        </h1>
                        <p>@im_rhlrvndrn</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
