import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import Checkout from './containers/Checkout';
import ThankYou from './containers/ThankYou';


const App = () => (
    <Router>
        <Route exact path='/' component={Home} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/thank-you' component={ThankYou} />
    </Router>
);

export default App;
