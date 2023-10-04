import React, {useEffect, useState} from "react";
import axios from "axios";

function Contacts_db() {
        const [dane, setDane] = useState([]);

        useEffect(() => {
            // Wywołaj API, aby pobrać dane z serwera
            axios.get('https://localhost:8080/reqs')
                .then(response => {
                    // Obsługa odpowiedzi po udanym zapytaniu
                    setDane(response.data)
                    console.log(response.data); // Dane otrzymane z serwera
                })
                .catch(error => {
                    // Obsługa błędu w przypadku niepowodzenia zapytania
                    console.error('Błąd zapytania:', error);
                });
            }, []);
        
          return (
            <div>
              <h1>Informacje z bazy danych:</h1>
              <ul>
                {dane.map(item => (
                  <li key={item.id}>{item.nazwa}</li>
                ))}
              </ul>
            </div>
          );
        }
  
  export default Contacts_db;
  