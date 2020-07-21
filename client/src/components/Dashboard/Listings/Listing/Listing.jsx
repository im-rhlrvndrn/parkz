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
                e.target.style.border = '2px solid #2ecadd';
                e.target.style.boxShadow = '2px 2px 10px -10px #2ecadd';
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
