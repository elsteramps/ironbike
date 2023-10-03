import React, {useState, useEffect} from 'react';
import './Modal.css';
import ContactForm from './ContactForm';
import { Button } from './Button';
import { CSSTransition } from "react-transition-group";

const Modal = ({show, handleClose}) => {

  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
      setIsOpen(true);
    }, []); // Pusta tablica zależności oznacza, że useEffect wykona się tylko raz po montażu komponentu

  handleClose = () => {
    setIsOpen(false);
  };

  return (
        <CSSTransition
        in={isOpen}
        timeout={200}
        classNames="modal"
        unmountOnExit
      >
    <div className='modal'>

      <section className="modal-main">
        <button onClick={handleClose} className="modal-close-button">
          Zamknij
        </button>
        <ContactForm/>
      </section>
    </div>
    </CSSTransition>
  );
};

export default Modal;