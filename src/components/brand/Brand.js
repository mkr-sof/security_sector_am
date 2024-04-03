import React from 'react';
import { Link } from 'react-router-dom';
import './brand.css';
import {Wrapper} from "../index";
import { hikVision, cisco, bosch } from './imports';

const Brand = () => {
    return (
        <Wrapper>
        <div className="security__brand section__padding" id="brand">
            <Link to="/hikVision">
                <div className="brand-image">
                    <img src={hikVision} alt="hikVision"/>
                </div>
            </Link>
            <Link to="/cisco">
                <div className="brand-image">
                    <img src={cisco} alt="cisco"/>
                </div>
            </Link>
            <Link to="/bosch">
                <div className="brand-image">
                    <img src={bosch} alt="bosch"/>
                </div>
            </Link>

        </div>
        </Wrapper>
    );
};

export default Brand;
