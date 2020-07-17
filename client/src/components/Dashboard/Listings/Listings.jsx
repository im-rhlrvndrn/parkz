import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

// SCSS files
import './Listings.scss';

// React components
import Listing from './Listing/Listing';
import ListingDetails from './ListingDetails/ListingDetails';

const Listings = (props) => {
    const [listingDetails, setListingDetails] = useState({});
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

    // ! Add another array that filters the listing when the user types in the search input
    useEffect(() => {
        gsap.to(listingsDiv, 0, { css: { visibility: 'visible' } });

        let animatedArray = [];

        if (listingsDiv) {
            listingsDiv.childNodes.forEach((node) => animatedArray.push(node));
        }

        const tl = new gsap.timeline();
        tl.from(animatedArray, {
            duration: 0.4,
            stagger: 0.15,
            opacity: 0,
            y: '-10px',
            ease: 'power3.InOut',
        });
    }, []);

    return (
        <div className='listingsComponent'>
            <div className='listingsWrapper'>
                <input
                    type='text'
                    name='search'
                    id='search'
                    autoComplete='off'
                    placeholder='Search for parking lots near you'
                />
                <div className='listings' ref={(el) => (listingsDiv = el)}>
                    {listingsArray.map((list, index) => (
                        <Listing
                            list={list}
                            key={index}
                            username={props.username}
                            setListingDetails={setListingDetails}
                        />
                    ))}
                </div>
            </div>
            <ListingDetails listingDetails={listingDetails} />
        </div>
    );
};

export default Listings;
