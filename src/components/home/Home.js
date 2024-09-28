import React from 'react';
import './home.css';
import {Brand, CTA, Navbar} from "../index";
import {Wrapper} from "../index";
import { Header } from "../../containers";

const Home = () => {
    return (

            <Wrapper>
                <div className="gradient__bg">
                    <Header/>
                </div>
        </Wrapper>
    );
};

export default Home;
