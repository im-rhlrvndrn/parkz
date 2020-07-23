import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = (props) => {
    return (
        <div>
            this is home page. Go to <NavLink to={`/user/im_rhlrvndrn`}>dashboard</NavLink>
        </div>
    );
};

export default Home;
