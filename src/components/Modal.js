import React from 'react';
import './Modal.css';
import ContactForm from './ContactForm';
import { Button } from './Button';

const Modal = ({ show, handleClose }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button onClick={handleClose} className="modal-close-button">
          Zamknij
        </button>
        <ContactForm/>
      </section>
    </div>
  );
};

export default Modal;