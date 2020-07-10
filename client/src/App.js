import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// SCSS file
import './components/GlobalStyles/GlobalStyles.scss';

// React-Components
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
    return (
        <div className='App'>
            <Router>
                <Route exact path='/auth/:auth' component={Auth} />
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/:navState' component={Dashboard} />
            </Router>
        </div>
    );
};

export default App;
