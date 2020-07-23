import React, { useEffect } from 'react';
import { gsap } from 'gsap';

// SCSS files
import './Bookings.scss';

// React components
import DashboardCompHeader from '../DashboardCompHeader/DashboardCompHeader';

// Utils
import useWindowSize from '../../../utils/useWindowSize';

const Bookings = ({ navState, setIsNavOpen }) => {
    let windowSize = useWindowSize();
    useEffect(() => {
        const tl = gsap.timeline();
        windowSize.width > 500
            ? tl.from('.bookings_details', {
                  duration: 0.4,
                  stagger: 0.15,
                  opacity: 0,
                  y: '30px',
                  skewY: -2,
                  ease: 'power3.InOut',
              })
            : tl.from('.bookings_details', {
                  duration: 0.4,
                  stagger: 0.15,
                  opacity: 0,
                  x: '30px',
                  skewX: -2,
                  ease: 'power3.InOut',
              });
    }, []);

    return (
        <>
            {windowSize.width < 1100 && (
                <DashboardCompHeader setIsNavOpen={setIsNavOpen} navState={navState} />
            )}
            <div className='bookingWrapper'>
                <h1>Your Bookings</h1>
                {/* <div className='bookingOverview'>
                    <div className='bookingOverview_details'>
                        <h2>Ongoing Bookings</h2>
                        <span className='bookingOverview_stats'>1</span>
                    </div>
                    <div className='bookingOverview_details'>
                        <h2>Completed Bookings</h2>
                        <span className='bookingOverview_stats'>23</span>
                    </div>
                    <div className='bookingOverview_details'>
                        <h2>All Bookings</h2>
                        <span className='bookingOverview_stats'>24</span>
                    </div>
                </div> */}
                <section className='bookings'>
                    <div className='bookings_details'>
                        <h2>PP Chambers Mall parking lot</h2>
                        <span className='bookings_stats'>done</span>
                    </div>
                    <div className='bookings_details'>
                        <h2>PP Chambers Mall parking lot</h2>
                        <span className='bookings_stats'>done</span>
                    </div>
                    <div className='bookings_details'>
                        <h2>PP Chambers Mall parking lot</h2>
                        <span className='bookings_stats'>done</span>
                    </div>
                    <div className='bookings_details'>
                        <h2>PP Chambers Mall parking lot</h2>
                        <span className='bookings_stats'>done</span>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Bookings;
