import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

// SCSS files
import './Listings.scss';

// React components
import Listing from './Listing/Listing';
import ListingDetails from './ListingDetails/ListingDetails';
import DashboardCompHeader from '../DashboardCompHeader/DashboardCompHeader';

// Utils
import useWindowSize from '../../../utils/useWindowSize';

const Listings = (props) => {
    const [listingDetails, setListingDetails] = useState({});
    const [filterValue, setFilterValue] = useState('');
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
    const filterArray = [];

    // ! Add another array that filters the listing when the user types in the search input
    useEffect(() => {
        const tl = new gsap.timeline();
        tl.from('.listing', {
            duration: 0.4,
            stagger: 0.15,
            opacity: 0,
            y: '-10px',
            ease: 'power3.InOut',
        });
    }, []);

    return (
        <>
            {useWindowSize().width < 1100 && <DashboardCompHeader navState={props.navState} />}
            <div className='listingsComponent'>
                <div className='listingsWrapper'>
                    <h1>Find a perfect parking slot</h1>
                    <input
                        type='text'
                        name='search'
                        id='search'
                        autoComplete='off'
                        onChange={(e) => {
                            setFilterValue(e.target.value);
                            console.log(filterValue);
                            listingsArray.forEach((item) => {
                                if (item.name.toLowerCase().includes(e.target.value)) {
                                    filterArray.push(item);
                                }
                            });
                            console.log(filterArray);
                        }}
                        placeholder='Search for parking lots near you'
                    />
                    <div className='listings'>
                        {filterValue === ''
                            ? listingsArray.map((list, index) => (
                                  <Listing
                                      list={list}
                                      key={index}
                                      username={props.username}
                                      setListingDetails={setListingDetails}
                                  />
                              ))
                            : filterArray.map((list, index) => (
                                  <Listing
                                      list={list}
                                      key={index}
                                      username={props.username}
                                      setListingDetails={setListingDetails}
                                  />
                              ))}
                    </div>
                </div>
                <ListingDetails
                    setParkinglotDetails={props.setParkinglotDetails}
                    listingDetails={listingDetails}
                />
            </div>
        </>
    );
};

export default Listings;
