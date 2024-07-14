import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from "react-dom";
import './cta.css';

import {useTranslation} from "react-i18next";
import Modal from "../modal/Modal";


const CTA = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState({});
    const modalRootRef = useRef(document.getElementById('modal-root'));

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    }
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setIsModalOpen();
            }
        };

        if (isModalOpen) {
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isModalOpen, setIsModalOpen]);

       const { t } = useTranslation();

    return (
        <>
            <div className="cta">
            <div className="security__cta">
                <div className="security__cta-content">
                    <p>If You Already Know What You Want</p>
                    <h3>You Can Fill the Form and Choose Product from our Friends</h3>
                </div>
                <div className="security__cta-btn">
                    <button type="button">Get Started</button>
                </div>

            </div>
            <div className="security__contact-heading">
                <h1>
                    If you haven't yet decided what you want, feel free to leave your contact information, and we will be happy to provide consultation.
                </h1>
            </div>

            <div className="security__header-content__input">
                <input type="email" placeholder="Your Email Address"/>
                <button type="button" onClick={handleModalToggle}>Get Started</button>
            </div>
            </div>
            {isModalOpen && ReactDOM.createPortal(
                <Modal
                    show={isModalOpen}
                    onClose={handleModalToggle}
                    title="Contact Us"
                    showCloseButton={true}
                    closeButtonText="Close"
                    onDataSubmit={(data) => console.log("data: ", data)}
                >
                </Modal>,
                modalRootRef.current
            )}
        </>
    );
};

export default CTA;
