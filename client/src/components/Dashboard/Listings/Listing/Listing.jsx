import React from 'react';

// SCSS files
import './Listing.scss';

const Listing = (props) => {
    return (
        <div
            // to={`/listing/${props.list.id}`}
            className='listing'
            onClick={(e) => {
                props.setListingDetails(props.list);
                e.target.style.border = '2px solid #283042';
            }}
        >
            <img src={props.list.img} alt='' />
            <div className='parkinglot_details'>
                <h3 className='parkinglot_name'>{props.list.name}</h3>
                <p className='parkinglot_location'>{props.list.location}</p>
            </div>
        </div>
    );
};

export default Listing;
