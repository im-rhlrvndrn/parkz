import React, { useEffect } from 'react';
import { gsap } from 'gsap';

// SCSS files
import './Profile.scss';

// React components
import Settings from '../../../React-Icons/SettingsIcon';
import DashboardCompHeader from '../DashboardCompHeader/DashboardCompHeader';

// Utils
import useWindowSize from '../../../utils/useWindowSize';

const Profile = ({ navState, setIsNavOpen }) => {
    const t1 = new gsap.timeline();

    useEffect(() => {
        t1.from('.profile_header', 0.4, { y: '-40px', ease: 'power3.Out' })
            .from(
                '.profile_header_info > h1',
                0.4,
                { opacity: 0, y: '40px', ease: 'power3.InOut' },
                0.2
            )
            .from(
                '.profile_header_info > p',
                0.4,
                { opacity: 0, y: '30px', ease: 'power3.InOut' },
                0.4
            );
    }, [t1, window.innerWidth]);

    return (
        <>
            {useWindowSize().width < 1100 && (
                <DashboardCompHeader navState={navState} setIsNavOpen={setIsNavOpen} />
            )}
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
