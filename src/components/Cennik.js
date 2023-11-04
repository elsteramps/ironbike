import React, {useState}from 'react';
import './Cennik.css';

function Cennik() {

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
    <div className='cennik'>
      <div className='cennik__container'>
            <h2>Jakie są ceny naszych usług?</h2>
            <h3>To zależy!</h3>
            <h3>Wycena naszych usług w konkretnym przypadku jest zależna od wielu czynników, takich jak: </h3>
            <ul className='cennik__items'>
                <li>Termin wyjazdu</li>
                <li>Lokalizacja</li>
                <li>Czas lotu i długość filmika po mantażu</li>
                <li>Odległość lokalizacji (długość dojazdu)</li>
                <li>i wiele innych!</li>
          </ul>
          <h3>Skontaktuj się z nami!</h3>
          <h3>Zamów bespłatną wycenę już dziś! Oddzwonimy i wyślemy wycenę w postaci tabelki w Excelu w ciągu dznia roboczego!</h3>
          <button className='btn-services' onClick={openModal} >WYPEŁNIJ FORMULARZ!</button> 
      </div>
    </div>         
    </>
  );
}

export default Cennik;