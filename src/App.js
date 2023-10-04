import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Cennik from './components/Cennik';
import Modal from './components/Modal';
import Contacts from './components/pages/Contacts';


function App() {

  const [showModal, setShowModal] = useState(false);

   useEffect(() => {
    const openModalTimeout = setTimeout(() => {
      setShowModal(true);
    }, 5000); // Otwórz modal po 7 sekundzie
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
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/clients' component={Contacts} />
          <Route path='/products' component={Products} />
          <Route path='/prices' component={Cennik} />
        </Switch>
      </Router>

</>
);
}

export default App;
