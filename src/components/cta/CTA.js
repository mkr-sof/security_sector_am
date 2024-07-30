import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from "react-dom";
// import './cta.css';

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

       const { t, i18n } = useTranslation();

    return (
        <>
            <div className="cta">
            <div className="security__cta">
                <div className="security__cta-content">
                    <p>{t('cta.content.text')}</p>
                    <h3>{t('cta.content.title')}</h3>
                </div>
                <div className="security__cta-btn">
                    <button type="button">{t('cta.content.button-text')}</button>
                </div>

            </div>
            <div className="security__cta__contact-heading">
                <h1>{t('cta.contact.text')}</h1>
            </div>

            <div className="security__cta__contact__input">
                <input type="email" placeholder="Your Email Address"/>
                <button type="button" onClick={handleModalToggle}>{t('cta.contact.button-text')}</button>
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
