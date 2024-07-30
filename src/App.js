import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {Home, Brand} from './components';
import {Map, What, Services, Contact} from './containers';
import './app.css';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const App = () => {


    return (
        <>
        <Router>
        <ScrollToTop />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/what" element={ <What /> } />
                <Route path="/services" element={ <Services /> } />
                <Route path="/brand" element={ <Brand /> } />
                <Route path="/contact" element={ <Contact /> } />
                <Route path="/map" element={ <Map /> } />
            </Routes>

        </Router>
        </>
    );
};

export default App;
