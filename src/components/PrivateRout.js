import React from 'react';
import { Route, Outlet, useNavigate } from 'react-router-dom';
import Contacts from './pages/Contacts';

function PrivateRoute() {
  const navigate = useNavigate();

  function isAuthenticated() {
    console.log(localStorage.getItem('admin'))
    // Sprawdź, czy informacja o zalogowanym użytkowniku istnieje w localStorage
    if(localStorage.getItem('admin') !== null){
        return true
    }
  }

  if (!isAuthenticated()) {
    // Jeśli użytkownik nie jest zalogowany, przekieruj go na stronę logowania
    navigate('/login');
  }

  return (
    <>
    <Outlet/>
    </>
  );
}

export default PrivateRoute;
