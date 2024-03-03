import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, Brand, CTA, Feature, Navbar, ScrollToTop} from './components';
import {Blog, Footer, What, Features, Header, Contact} from './containers';
import './app.css';



const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/what" element={ <What /> } />
                <Route path="/services" element={ <Features /> } />
                <Route path="/brand" element={ <Brand /> } />
                <Route path="/contact" element={ <Contact /> } />
            </Routes>

        </Router>
    );
};

export default App;
