import React, { useState} from 'react';
// import { useNavigate } from "react-router-dom";
import './ContactForm.css';
import axios from 'axios';

function ContactForm(show, handleClose) {


    // const [isFormVisible, setFormVisible] = useState(false);

    // useEffect(() => {
    //   // Ustaw stan na widoczny po określonym czasie (np. 3000 milisekund = 3 sekundy)
    // const timer = setTimeout(() => {
    //     setFormVisible(true);
    //   }, 3000);
  
    //   // Czyszczenie timera po odmontowaniu komponentu (opcjonalne)
    //   return () => clearTimeout(timer);
    // }, []);

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    imię: '',
    email: '',
    telefon: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     await axios.post('http://localhost:8080/requests', formData)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err))
      setSubmitted(true)
  };

  return (
    <div className='form-wrapper'>
      {submitted ? (
        <div>Dziękujemy za kontakt. Skontaktujemy się z Tobą wkrótce.</div>
      ) : (
     <form onSubmit={handleSubmit}>
      <h2 className='contactForm-h2'>Formularz Kontaktowy</h2>
        <div>
          <label htmlFor="imię">Imię:</label>
          <input
            type="text"
            id="imię"
            name="imię"
            value={formData.imię}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="telefon">Telefon:</label>
          <textarea
            id="telefon"
            name="telefon"
            value={formData.telefon}
            onChange={handleChange}
          />
        </div>
        <button type="submit">WYŚLIJ!</button>
      </form>
      )}   
      </div>
  );
}


export default ContactForm;