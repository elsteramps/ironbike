import React, {useState} from 'react';
import '../../App.css';
import ServiceTable from '../ServiceTable';
import "../ServiceTable.css";
import { Button } from '../Button';
import '../Button.css'

export default function Services() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const services = [
    { name: 'Fimowanie dronem', price: '279zł brutto/20 min lotu' },
    { name: 'Zdjęcia dronem', price: 'w pakiecie z Filmowaniem. 15 zdjęć w ciągu 20 minut lotU' },
    { name: 'Montaż wideo i obróbka zdjęć', price: 'od 200zł brutto/filmik' },
  ];



  return (
    <div className='services-container'>
      <h1>Lista Usług</h1>
      <ServiceTable services={services} />
      <p>Wszystkie ceny są podane szacunkowo i mogą się róźnić w zależności od wielu czynników! W celu ustalenia dokładnej wyceny zapraszamy do zgłoszenia się poprzez formularz kontaktowy!</p>
      <button className='btn-services' onClick={openModal} >WYPEŁNIJ FORMULARZ!</button>
    </div>
  );
  }
