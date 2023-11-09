import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <h2 className='footer-label'>Kontakt</h2>
      {/* <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div> */}
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src="./icons/photo_2023-11-09_11-54-51.jpg" alt="drone_icon" height="80"></img>
            </Link>
          </div>
          <div className='webRights-contact'>
          <small className='website-rights'>IRONBIKE Mateusz Sernecki © 2020</small>
          <small className='website-rights'>+48574375000</small>
          <small className='website-rights'>dronearoundworld@gmail.com</small>
          </div>
          <div className='social-icons'>
            {/* <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link> */}
            <Link
              className='social-icon-link instagram'
              to='https://www.instagram.com/dronearoundworld/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='https://www.youtube.com/channel/UCNl-MeYvaOmxdgzcTCPHIFg'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
          </div>
        </div>
      </section>
          <iframe
            className='footer-map' 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1176.2600748088737!2d17.006953356078025!3d51.09867404780058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc33950a9f7e5%3A0xf34c3b5ca9a85d61!2sIRONBIKE%20serwis%20rowerowy!5e0!3m2!1spl!2spl!4v1699527713704!5m2!1spl!2spl" 
            width="600" 
            height="450" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
    </div>
  );
}

export default Footer;
