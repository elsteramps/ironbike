import React, {useState, useEffect} from 'react';
import './Cards.css';
import Card from './Card';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Cards() {

  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   axios.get('/images')
  //   .then(response => {
  //     console.log(response.data)
  //     setImages(response.data)
  //     // response.data to lista zdjęć z serwera
  //     console.log(images)
  //   })
  //   .catch(error => {
  //     console.error('Błąd podczas pobierania danych', error);
  //   });
  // }, []);

  // const cardsData = [

  //   // {
  //   //   title: 'Karteczka 1',
  //   //   description: '',
  //   //   imageSrc: './images/1.jpg',
  //   // },
  //   // {
  //   //   title: 'Karteczka 2',
  //   //   description: '',
  //   //   imageSrc: './images/2.jpg',
  //   // },
  //   // {
  //   //   title: 'Karteczka 3',
  //   //   description: '',
  //   //   imageSrc: './images/3.jpg',
  //   // },
  //   // {
  //   //   title: 'Karteczka 4',
  //   //   description: '',
  //   //   imageSrc: './images/4.jpg',
  //   // },
  //   // {
  //   //   title: 'Karteczka 6',
  //   //   description: '',
  //   //   imageSrc: './images/5.jpg',
  //   // },
  //   // {
  //   //   title: 'Karteczka 7',
  //   //   description: 'Opis karteczki 2',
  //   //   imageSrc: './images/5.jpg',
  //   // },
  //   // {
  //   //   title: 'Karteczka 8',
  //   //   description: 'Opis karteczki 2',
  //   //   imageSrc: './images/5.jpg',
  //   // },
  //   // {
  //   //   title: 'Karteczka 9',
  //   //   description: 'Opis karteczki 2',
  //   //   imageSrc: './images/5.jpg',
  //   // },
  //   // {
  //   //   title: 'Karteczka 5',
  //   //   description: 'Opis karteczki 2',
  //   //   imageSrc: './images/5.jpg',
  //   // },
  //   // // Dodaj więcej danych dla innych karteczek
  // ];

  return (
    <div className='cards'>
      <h1>SKLEP/SERWIS ROWEROWY "IRONBIKE"</h1>
      <div className='content'>
      <div className='content-wrapper'>
      <p className='content-text'>Witaj w naszym raju dla miłośników rowerów! Nasz sklep i serwis rowerowy już od ponad dwóch lat jest miejscem, gdzie pasja spotyka się z profesjonalizmem, a twoja przygoda na dwóch kółkach zaczyna się naprawdę!</p>
      <p className='content-text'>Oferujemy nie tylko rowery, a także akcesoria, narzędzia i gadżety rowerowe. Chcemy, abyś czuł się pewnie i stylowo na każdej trasie!</p>
      <p className='content-text'>Przyjdź do naszego sklepu i serwisu rowerowego, gdzie wspólnie z nami odkryjesz radość z jazdy na rowerze i doświadczysz profesjonalnej obsługi, której zasługujesz!</p>
      <h2 className='bikestore-label'>SKLEP ROWEROWY</h2>
      <p className='content-text'> Jak na rzie, niestety, nie mamy sklepu internetowego na naszej stronie, natomiast, zapraszamy do naszego {<Link className='allegro-link' to='https://allegro.pl/uzytkownik/Iron-Bike'><span className='allegro-link-span'>sklepu</span></Link>} na Allegro!</p>
      <div className='allegro-img'>
      <Link  
      to='https://allegro.pl/uzytkownik/Iron-Bike'>
        <img src='/images/1280px-Allegro.pl_sklep.jpg' width='150px'></img>
      </Link>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Cards;
