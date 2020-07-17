import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

// SCSS files
import './Profile.scss';

// React components
import Settings from '../../../React-Icons/SettingsIcon';

const Profile = () => {
    let profile_header = useRef(null);
    let info = useRef(null);

    const t1 = new gsap.timeline();

    useEffect(() => {
        gsap.to(profile_header, 0, { css: { visibility: 'visible' } });
        t1.from(profile_header.children[0], 0.4, { y: '-40px', ease: 'power3.Out' })
            .from(info.children[0], 0.4, { opacity: 0, y: '40px', ease: 'power3.InOut' }, 0.2)
            .from(info.children[1], 0.4, { opacity: 0, y: '30px', ease: 'power3.InOut' }, 0.4);
    }, [t1]);

    return (
        <>
            <div className='profile'>
                <div className='profile_header' ref={(el) => (profile_header = el)}>
                    <img
                        src='https://images.pexels.com/photos/3465204/pexels-photo-3465204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        alt=''
                    />
                    <div className='profile_header_info' ref={(el) => (info = el)}>
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
