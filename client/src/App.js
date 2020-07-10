import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// SCSS file
import './components/GlobalStyles/GlobalStyles.scss';

// React-Components
import Auth from './components/Auth/Auth';

const App = () => {
    return (
        <div className='App'>
            <Router>
                <Route exact path='/auth/:auth' component={Auth} />
            </Router>
            {/* <Auth /> */}
        </div>
    );
};

export default App;
