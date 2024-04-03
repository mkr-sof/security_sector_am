import React, {useTransition} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, Brand, ScrollToTop} from './components';
import {Map, What, Features, Contact} from './containers';
import './app.css';



// import LanguageSwitcher from './translation/LanguageSwitcher';

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
                <Route path="/map" element={ <Map /> } />
            </Routes>

        </Router>

    );
};

export default App;
