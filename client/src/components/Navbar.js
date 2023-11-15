import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Modal from './Modal';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      {showModal && (
      <Modal show={showModal} handleClose={closeModal}>
      </Modal>)}
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src="icons/photo_2023-11-09_11-54-51.jpg" alt="drone_icon" height="80"/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <div className='nav-label'>
          <h2 className='nav-label-text'>SKLEP/SERWIS ROWEROWY "IRONBIKE"</h2>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li onClick={openModal} className='nav-item'>
              <Link className='nav-links' onClick={closeMobileMenu}>
                Zamów wycenę
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Usługi
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link
                to='/prices'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Cennik
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
