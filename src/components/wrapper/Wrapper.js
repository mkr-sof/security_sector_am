
import React, { Suspense } from 'react';
import { Header, Footer } from "../../containers";
import { ScrollToTop} from "../index";
const Navbar = React.lazy(() => import('../navbar/Navbar'));

function Wrapper(props) {
    return (
        <div id="wrapper">
            <ScrollToTop />
            {/*<Header/>*/}
{/*<Suspense fallback={<div style={{ textAlign: 'center', paddingTop: '20px', color: 'white' }}>Loading...</div>}>*/}
            <Navbar/>
{/*</Suspense>*/}
            {props.children}
            <Footer/>
        </div>
    );
}

export default Wrapper;
