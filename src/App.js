import React from 'react';

import { Article, Brand, CTA, Feature, Navbar } from "./components";
import { Blog, Footer, What, Features, Header, Possibility } from './containers'


const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />

            </div>
            <Brand />
            <What />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />

        </div>
    );
};

export default App;
