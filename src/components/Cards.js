import React, {useState, useEffect} from 'react';
import './Cards.css';
import Card from './Card';
import axios from 'axios';

function Cards() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('/images')
    .then(response => {
      console.log(response.data)
      setImages(response.data)
      // response.data to lista zdjęć z serwera
      console.log(images)
    })
    .catch(error => {
      console.error('Błąd podczas pobierania danych', error);
    });
  }, []);

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
      <h1>Nasze portfolio</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <div className="card-container">
            {images.map((card, index) => (
              <Card key={index} imageSrc={'./images/'+card} description = {''} />
            ))}
      </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
