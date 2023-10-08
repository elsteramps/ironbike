import React from 'react';
import Contacts_db from '../Contacts_db';
import { useEffect } from 'react';

function Contacts() {

  useEffect(() => {
    // Zaktualizuj tytuł dokumentu korzystając z interfejsu API przeglądarki
    localStorage.clear();
  });
    return (
      <>
      <Contacts_db/>
      </>
    );
  }
  
  export default Contacts;
  