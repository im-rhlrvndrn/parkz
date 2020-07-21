import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { gsap } from 'gsap';

// SCSS file
import './components/GlobalStyles/GlobalStyles.scss';

// React-Components
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';

const App = () => {
    useEffect(() => {
        gsap.to('.App', 0, { css: { visibility: 'visible' } });
    }, []);
    return (
        <div className='App'>
            <Router>
                <Route exact path='/' component={Home} />
                <Route exact path='/auth/:auth' component={Auth} />
                <Route exact path='/:navState/:username' component={Dashboard} />
            </Router>
        </div>
    );
};

export default App;
