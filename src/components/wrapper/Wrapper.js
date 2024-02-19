import React from 'react';
import { Header, Footer } from "../../containers";
import {Navbar} from "../index";


function Wrapper(props) {
    return (
        <div id="wrapper">
            {/*<Header/>*/}
            <Navbar/>
            {props.children}
            <Footer/>
        </div>
    );
}

export default Wrapper;
