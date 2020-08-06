import React from 'react';

// SCSS files
import './Listing.scss';

const Listing = ({ list, setListingDetails }) => {
    return (
        <div
            // to={`/listing/${props.list.id}`}
            className='listing'
            onClick={(e) => {
                setListingDetails(list);
                e.target.style.border = '2px solid #2ecadd';
                e.target.style.boxShadow = '2px 2px 10px -10px #2ecadd';
            }}
        >
            <img src={list.img} alt='' />
            <div className='parkinglot_details'>
                <h3 className='parkinglot_name'>{list.name}</h3>
                <p className='parkinglot_location'>{list.location}</p>
            </div>
        </div>
    );
};

export default Listing;
