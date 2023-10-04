import React, {useEffect, useState} from "react";
import axios from "axios";
import { json } from "body-parser";

function Contacts_db() {
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
        
          return (
            <div>
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
  