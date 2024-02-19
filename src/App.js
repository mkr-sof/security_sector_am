import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Article, Brand, CTA, Feature, Navbar} from './components';
import {Blog, Footer, What, Features, Header, Possibility} from './containers';
import './app.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <div className="gradient__bg">
                    <Navbar/>
                    <Header/>

                </div>

                <Brand/>
                <What/>
                <Features/>
                <Possibility/>
                <CTA/>
                <Blog/>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
