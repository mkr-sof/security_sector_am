import React from 'react';
import { Link } from 'react-router-dom';
import './brand.css';
import { hikVision, cisco, bosch } from './imports';

const Brand = () => {
    return (
        <div className="gpt3__brand section__padding">
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
    );
};

export default Brand;
