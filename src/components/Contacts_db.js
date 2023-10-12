import React, {useEffect, useState} from "react";
import axios from "axios";
import { json } from "body-parser"
import bcrypt from 'bcryptjs'

function Contacts_db() {

        // bcrypt
        // .genSalt(saltRounds)
        // .then(salt => {
        //   console.log('Salt: ', salt)
        //   return bcrypt.hash(formData.password, salt)
        // })
        // .then(hash => {
        //   console.log('Hash: ', hash)
        //   setFormData(
        //     [
        //       { login: 'admin', password: hash },
        //     ]
        // );
        // })
        // .catch(err => console.error(err.message))

        const [password, setPass] = useState('');

        const [dane, setDane] = useState([]);

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
              const haShedPassword = bcrypt.hashSync(password, 10);
              await axios.post('http://localhost:8080/admin_data', {haShedPassword})
                .then(res => {
                  console.log(res);
                })
                .catch(err => console.log(err))
            };

            const handleChange = (e) => {
              setPass(e.target.value);
            };
        
          return (
            <div>
              <button onClick={handleClick}>Zmień hasło</button>
              <label htmlFor="password">Nowe hasło:</label>
              <input
                type="text"
                id="password"
                name="password"
                value={password}
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
  