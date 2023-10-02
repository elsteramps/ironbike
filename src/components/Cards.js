import React from 'react';
import './Cards.css';
import Card from './Card';

function Cards() {
  const cardsData = [
    {
      title: 'Karteczka 1',
      description: 'Opis karteczki 1',
      imageSrc: './images/img-1.jpg',
    },
    {
      title: 'Karteczka 2',
      description: 'Opis karteczki 2',
      imageSrc: 'link_do_obrazka_2.jpg',
    },
    {
      title: 'Karteczka 2',
      description: 'Opis karteczki 2',
      imageSrc: 'link_do_obrazka_2.jpg',
    },
    {
      title: 'Karteczka 2',
      description: 'Opis karteczki 2',
      imageSrc: 'link_do_obrazka_2.jpg',
    },
    {
      title: 'Karteczka 2',
      description: 'Opis karteczki 2',
      imageSrc: 'link_do_obrazka_2.jpg',
    },
    // Dodaj więcej danych dla innych karteczek
  ];

  return (
    <div className='cards'>
      <h1>Nasze portfolio</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <div className="card-container">
            {cardsData.map((card, index) => (
              <Card key={index} {...card} />
            ))}
      </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
