
import React, { Suspense } from 'react';
import { Header, Footer } from "../../containers";
import { ScrollToTop} from "../index";
import {useTranslation} from "react-i18next";
const Navbar = React.lazy(() => import('../../components/navbar/Navbar'));

function Wrapper(props) {
    const { t } = useTranslation();
    return (
        <div id="wrapper">
                    {/*<Header/>*/}
<Suspense fallback={<div style={{ textAlign: 'center', paddingTop: '20px', color: 'white' }}>Loading...</div>}>
            <Navbar/>
</Suspense>
            {props.children}
            <Footer/>
        </div>
    );
}

export default Wrapper;
