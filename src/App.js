import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes, BrowserRouter, Outlet } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Cennik from './components/Cennik';
import Modal from './components/Modal';
import Contacts from './components/pages/Contacts';
import LogIn from './components/pages/LogIn';
import PrivateRoute from './components/PrivateRout';


function App() {

  const [showModal, setShowModal] = useState(false);

   useEffect(() => {
    const openModalTimeout = setTimeout(() => {
      setShowModal(true);
    }, 15000); // Otwórz modal po 7 sekundzie
    return () => {
      clearTimeout(openModalTimeout);
    };
  }, []); // Pusta tablica zależności oznacza, że useEffect wykona się tylko raz po montażu komponentu

  const closeModal = () => setShowModal(false);



  return (
    <>
    {showModal && (
    <Modal show={showModal} handleClose={closeModal}>
      </Modal>)}
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/login' element={<LogIn/>} />
          <Route Route path="/private" element={<PrivateRoute />}>
          <Route path='clients' element={<Contacts/>} />
          </Route>
          <Route path='/products' element={<Products/>} />
          <Route path='/prices' element={<Cennik/>} />
        </Routes>
      </Router>

</>
);
}

export default App;
