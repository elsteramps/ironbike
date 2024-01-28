import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes, BrowserRouter, Outlet } from 'react-router-dom';
import Services from './components/pages/Services';
import Cennik from './components/Cennik'
import Modal from './components/Modal';


function App() {

  const [showModal, setShowModal] = useState(false);

   useEffect(() => {
    const openModalTimeout = setTimeout(() => {
      setShowModal(true);
    }, 10000); // Otwórz modal po 7 sekundzie
    return () => {
      clearTimeout(openModalTimeout);
    };
  }, []); // Pusta tablica zależności oznacza, że useEffect wykona się tylko raz po montażu komponentu

  const closeModal = () => setShowModal(false);

  // --openssl-legacy-provider start


  return (
    <>
      <Router>
        <Navbar />
        {showModal ? <Modal/> : null}
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/prices' element={<Cennik/>} />
        </Routes>
      </Router>

</>
);
}

export default App;
