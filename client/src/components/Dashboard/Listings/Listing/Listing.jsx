import React, { useRef, useEffect } from 'react';
import { TimelineLite, Power3 } from 'gsap';

// SCSS files
import './Listing.scss';

const Listing = ({ list }) => {
    let listing = useRef(null);

    const t1 = new TimelineLite();

    useEffect(() => {
        t1.from(listing, 1, { opacity: 0, y: '-30px', ease: Power3.easeInOut }, 0.2);
    }, []);

    return (
        <div className='listing' ref={(el) => (listing = el)}>
            <img src={list.img} alt='' />
            <div className='parkinglot_details'>
                <h3 className='parkinglot_name'>{list.name}</h3>
                <p className='parkinglot_location'>{list.location}</p>
            </div>
        </div>
    );
};

export default Listing;
