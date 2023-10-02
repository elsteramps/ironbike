import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Cennik from './components/Cennik';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Ustaw stan modalu na true po montażu komponentu (czyli po wejściu na stronę)
    setShowModal(true);
  }, []); // Pusty tablica zależności, żeby useEffect uruchomił się tylko raz po montażu komponentu

  const closeModal = () => {
    setShowModal(false);
  };


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
          <Route path='/products' component={Products} />
          <Route path='/prices' component={Cennik} />
        </Switch>
      </Router>

</>
);
}

export default App;
