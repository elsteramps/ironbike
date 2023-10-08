import React, { useState } from 'react'
import axios from 'axios';
import Home from './Home';
import bcrypt from 'bcryptjs'
import { redirect, useNavigate } from 'react-router';

export default function LogIn() {

    const [formData, setFormData] = useState({
        login: '',
        hasło: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    //   const [submitted, setSubmitted] = useState(false)

    // const [auth, setAuth] = useState(false);

    const navigate = useNavigate()

    function handleLoginSuccess(username) {
        // Ustaw informację o zalogowanym użytkowniku w localStorage
        localStorage.setItem('admin', username);
      }

    const handleSubmit = async (e) => {
        e.preventDefault();
         await axios.get('http://localhost:8080/admin_data')
          .then((res, err) => {
            console.log(res.data)
            bcrypt.compare(formData.password, 
              res.data[0].password, 
              (error, result) => {
              if (error) {
                console.error('Błąd porównywania haseł:', error);
              } else if (result === true) {
                  // Hasło jest poprawne
                  console.log('Hasło jest poprawne');
                  console.log(res.status);
                  handleLoginSuccess(res.data)
                  console.log(res.data[0].login)
                  navigate('/private')
                } else {
                  // Hasło jest niepoprawne
                  console.log('Hasło jest niepoprawne');
                }
              });
            
            // if(res.status == 200 && 
            //   formData.login == res.data[0].login && 
            //   formData.password == res.data[0].password){
            // }
            
            // else{
            // console.log("Błędne dane")
            // };
          })
          .catch(err => console.log(err))
          }


  return (
    <div className='form-wrapper'>
   <form onSubmit={handleSubmit}>
    <h2 className='contactForm-h2'>Zaloguj się</h2>
      <div>
        <label htmlFor="login">login:</label>
        <input
          type="text"
          id="login"
          name="login"
          value={formData.login}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">password:</label>
        <input
          type="text"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">WYŚLIJ!</button>
    </form>   
    </div> 
  )
}
