import React, {useState} from 'react';
import './modal.css';
import Form from "../form/Form";

const Modal = ({show, onClose, onDataSubmit, title, children, customClass, customStyles,  showCloseButton, closeButtonText}) => {
    const [data, setData] = useState({});


    const handleDataChange = (newData) => {
        setData(prevData =>({
            ...prevData,
            ...newData
        }));
        console.log(newData);
        onClose()
    }
      return (
        <>
            <div className={`modal-overlay ${customClass}`}
                 onClick={onClose}
            >
                {show && (
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal__header">
                                <h1>{title}</h1>
                                {showCloseButton && (
                                    <button className="modal__close-button" onClick={onClose}>{closeButtonText}</button>
                                )}
                            </div>
                            <div className="modal__body">
                                <Form handleDataChange={handleDataChange} />
                                {/*<Form onSubmit={(data) => {*/}
                                {/*    onDataSubmit(data);*/}
                                {/*    onClose();}} />*/}
                            </div>
                    </div>
                )}
            </div>
            </>
    );
            }
Modal.defaultProps = {
    customClass: '',
    showCloseButton: true,
    closeButtonText: 'Close'
};
export default Modal;
