import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, Brand, CTA, Feature, Navbar} from './components';
import {Blog, Footer, What, Features, Header, Possibility} from './containers';
import './app.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/what" element={ <What /> } />
                <Route path="/services" element={ <Features /> } />
                <Route path="/brand" element={ <Brand /> } />
            </Routes>

        </Router>
    );
};

export default App;
