import React, { useRef, useEffect } from 'react';
import { TweenMax } from 'gsap';

// SCSS files
import './Listings.scss';

// React components
import Listing from './Listing/Listing';

const Listings = (props) => {
    let listingsDiv = useRef(null);
    const listingsArray = [
        {
            img:
                'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            name: 'Viviana Mall parking lot',
            location: 'Thane',
        },
        {
            img:
                'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            name: 'Korum Mall parking lot',
            location: 'Thane',
        },
        {
            img:
                'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            name: 'PP Chambers Mall parking lot',
            location: 'Dombivli',
        },
        {
            img:
                'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            name: 'Viviana Mall parking lot',
            location: 'Thane',
        },
        {
            img:
                'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            name: 'Viviana Mall parking lot',
            location: 'Thane',
        },
    ];

    useEffect(() => {
        TweenMax.to(listingsDiv, 0, { css: { visibility: 'visible' } });
    }, []);

    return (
        <div className='listingsWrapper'>
            <input
                type='text'
                name='search'
                id='search'
                placeholder='Search for parking lots near you'
            />
            <div className='listings' ref={(el) => (listingsDiv = el)}>
                {listingsArray.map((list) => (
                    <Listing list={list} />
                ))}
            </div>
        </div>
    );
};

export default Listings;
