import React, {useEffect, useState} from "react";
import axios from "axios";
import { json } from "body-parser";

function Contacts_db() {

        const bcrypt = require("bcrypt");
        const saltRounds = 10;

        bcrypt
        .genSalt(saltRounds)
        .then(salt => {
          console.log('Salt: ', salt)
          return bcrypt.hash(formData.password, salt)
        })
        .then(hash => {
          console.log('Hash: ', hash)
          setFormData(
            [
              { login: 'admin', password: hash },
            ]
        );
        })
        .catch(err => console.error(err.message))

        const [dane, setDane] = useState([]);

        const [formData, setFormData] = useState({
          login: 'admin',
          password: ''
        });

        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value,
          });
        };

        useEffect(() => {
            // Wywołaj API, aby pobrać dane z serwera
            axios.get('http://localhost:8080/reqs')
                .then(response => {
                    // Obsługa odpowiedzi po udanym zapytaniu
                    console.log(response.data); // Dane otrzymane z serwera
                    setDane(response.data);

                })
                .catch(error => {
                    // Obsługa błędu w przypadku niepowodzenia zapytania
                    console.error('Błąd zapytania:', error);
                });
            }, []);

            // function hashPassword(plaintextPassword) {
            //   const hash = bcrypt.hash(plaintextPassword, 10);
            //   return hash

            //   // Store hash in the database
            // }
            
            // // compare password
            // async function comparePassword(plaintextPassword, hash) {
            //   const result = await bcrypt.compare(plaintextPassword, hash);
            //   return result;
            // }



            const handleClick = async (e) => {
              e.preventDefault();
               await axios.post('http://localhost:8080/admin_data', formData)
                .then(res => {
                  console.log(res);
                })
                .catch(err => console.log(err))
            };
        
          return (
            <div>
              <button onClick={handleClick}>Zmień hasło</button>
              <label htmlFor="password">Nowe hasło:</label>
              <input
                type="text"
                id="imię"
                name="imię"
                value={formData.password}
                onChange={handleChange}
              />
              <h1>Klienci</h1>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>imię</th>
                    <th>email</th>
                    <th>telefon</th>
                  </tr>
                </thead>
                <tbody>
                  {dane.map(item => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.imię}</td>
                      <td>{item.email}</td>
                      <td>{item.telefon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
  
  export default Contacts_db;
  