import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/batumi_night_1.mp4' autoPlay loop muted />
      <h1>NAGRYWANIE Z DRONA</h1>
      <p>I nie tylko!</p>
    </div>
  );
}

export default HeroSection;
