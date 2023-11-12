import React, {useState} from 'react';
import '../../App.css';
import ServiceTable from '../ServiceTable';
import "../ServiceTable.css";
import '../Button.css'

export default function Services() {
  // const [showModal, setShowModal] = useState(false);

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  // const openModal = () => {
  //   setShowModal(true);
  // };

  const services_naped = [
    {name: 'Regulacja przerzutki przód/tył', price: '35-50 zł'},
    {name: 'Wymiana przerzutki przód (z regulacją)', price: '60 zł'},
    {name: 'Wymiana przerzutki tył (z regulacją)', price: '50 zł'},
    {name: 'Wymiana haka przerzutki (bez regulacji)', price: '10 zł'},
    {name: 'Prostowanie haka przerzutki (bez regulacji)', price: '30 zł'},
    {name: 'Wymiana linki i pancerza przerzutki (z regulacją)', price: '40 zł'},
    {name: 'Wymiana manetki przerzutki', price: '50 zł'},
    {name: 'Wymiana klamkomanetki (dźwignia hamulca + przerzutki)', price: '60 z'},
    {name: 'Wymiana kasety lub wolnobiegu (koło na szybkozamykacz lub luzem / koło na śruby)', price: '25/30 zł'},
    {name: 'Wymiana tarczy korby (bez demontażu korby)', price: '15 zł'},
    {name: 'Wymiana tarczy korby (jeśli jest konieczny demontaż)', price: '60 zł'},
    {name: 'Wymiana korby', price: '60 zł'},
    {name: 'Wymiana suportu', price: '70 zł'},
    {name: 'Wymiana pedałów', price: '20 zł'},
    {name: 'Naprawa gwintu korby pod pedał', price: '75 zł'},
    {name: 'Smarowanie łańcucha', price: '5 zł'},
    {name: 'Wymiana lub skrócenie łańcucha ', price: '20 zł'},
    {name: 'Czyszczenie napędu', price: '75 zł'},
  ];

  const services_hamulce = [
    {name: 'Wymiana klamki hamulca mechanicznego', price: '30 zł'},
    {name: 'Wymiana klamki hamulca hydraulicznego (z odpowietrzaniem)', price: '70 zł'},
    {name: 'Wymiana klocków hamulca (V-brake, tarczowy, caliper) z regulacją', price: '30 zł'},
    {name: 'Wymiana klocków hamulca typu cantilever z regulacją', price: '40 zł'},
    {name: 'Wymiana hamulca z regulacją', price: '50 zł'},
    {name: 'Regulacja hamulca', price: '30 zł'},
    {name: 'Wymiana linki i pancerza hamulca mechanicznego (z regulacją)', price: '40 zł'},
    {name: 'Odpowietrzenie hamulca hydraulicznego', price: '50-100 zł'},
    {name: 'Wymiana przewodu hamulca hydraulicznego (z odpowietrzeniem)', price: '80 zł'},
    {name: 'Wymiana tarczy hamulca (montaż centerlock/na śruby)', price: '20-30 zł'},
    {name: 'Prostowanie tarczy hamulca', price: '30-40 zł'},
  ];

  const services_kola = [
    {name: 'Wymiana dętki i/lub opony (koło na szybkozamykacz lub luzem ', price: '25 zł'},
    {name: 'Wymiana dętki i/lub opony (koło na śruby)', price: '30 zł'},
    {name: 'Wymiana dętki i/lub opony (pełna osłona łańcucha, hamulec rolkowy, niaciągi koła, itp.)', price: 'od 40 zł'},
    {name: 'Centrowanie koła', price: '35-60 zł'},
    {name: 'Wymiana jednej lub kilku szprych (bez demontażu kasety i/lub tarczy, z centrowaniem)', price: '40-70 zł'},
    {name: 'Zaplecenie nowego koła', price: '120 zł'},
    {name: 'Wymiana obręczy / piasty / więcej niż połowy szprych', price: '150 zł'},
    {name: 'Regulacja łożysk piasty (łożyska kulkowe)', price: "25 zł"},
    {name: 'Wymiana łożysk piasty (łożyska maszynowe)', price: '50-80 zł'},
    {name: 'Serwis łożysk piasty', price: '60 zł'},
    {name: 'Serwis piasty typu Torpedo (1-biegowej)', price: '80 zł'},
    {name: 'Serwis piasty planetarnej 3-biegowe', price: '120 zł'},
    {name: 'Serwis piasty planetarnej 5- do 8-biegowej', price: '150 zł'},
    {name: 'Wymiana oleju w piaście Shimano Alfine 11 lub Rohloff Speedhub (bez oleju)', price: '50 zł'},
  ];

   const services_kierownica = [
    {name: 'Wymiana kierownicy', price: '35 zł'},
    {name: 'Wymiana chwytów', price: '25 zł'},
    {name: 'Wymiana owijki kierownicy szosowej', price: '60 zł'},
    {name: 'Wymiana wspornika kierownicy', price: '30-50 zł'},
    {name: 'Regulacja sterów', price: '25 zł'},
    {name: 'Serwis sterów', price: '60 zł'},
    {name: 'Wymiana sterów', price: '80 zł'},
    {name: 'Serwis amortyzatora', price: 'od 100 zł'},
    {name: 'Wymiana widelca/amortyzatora', price: '80 zł'},
    {name: 'Przycięcie rury sterowej', price: '25 zł'},
    {name: 'Gwintowanie rury sterowej', price: '25 zł/1 cm'}
   ];

   const services_inne = [
    {name: 'Wymiana siodła/sztycy', price: '20 zł'},
    {name: 'Wymiana/montaż błotników', price: '30-80 zł'},
    {name: 'Wymiana/montaż bagażnika', price: '20-60 zł'},
    {name: 'Montaż licznika przewodowego (z zaprogramowaniem)', price: '40 zł'},
    {name: 'Montaż licznika bezprzewodowego (z zaprogramowaniem)', price: '30 zł'},
    {name: 'Montaż fotelika', price: '50 zł'},
    {name: 'Montaż drobnych akcesoriów (koszyk bidonu, rogi, nóżka, lampki, lusterko, itp.)', price: 'od 10 zł'},
    {name: 'Wymiana lampki przód/tył na dynamo, lub dynama', price: '25 zł'},
    {name: 'Malowanie roweru*', price: 'od 400 zł'},
    {name: 'Pakowanie roweru do wysyłki (karton gratis)/rozpakowanie i złożenie roweru z regulacją', price: '150 zł'},
    {name: 'Wymiana ramy', price: '300 zł'},
    {name: 'Spawanie ramy', price: 'od 250 zł'},
    {name: 'Złożenie roweru na zamówienie (części własne)', price: '300 zł'},
    {name: 'Złożenie roweru na zamówienie (części zamówione w IRONBIKE)', price: 'GRATIS'}
   ];



  return (
    <div className='services-container'>
      <h1>Cennik</h1>
      <ServiceTable 
      services = {services_naped}
      table_name = 'Napęd'/>
      <ServiceTable 
      services = {services_hamulce}
      table_name = 'Hamulce'/>
      <ServiceTable 
      services = {services_kola}
      table_name = 'Koła'/>
      <ServiceTable 
      services = {services_kierownica}
      table_name = 'Układ kierowniczy'/>
      <ServiceTable 
      services = {services_inne}
      table_name = 'Inne'/>
        <h2 className='table-warning'>UWAGA!</h2>
        <p className='table-warning-info'> 
            Podane ceny dotyczą wyłącznie usługi, nie zawierają w sobie kosztów komponentów!
            Podane ceny są wyłącznie orientacyjne, koszt usługi może się różnić od podanego w tabeli!
            Może tak być szczególnie w przypadku gdy niektóre komponenty mogą być uszkodzone w sposób utrudniający ich wymianę (np. zapieczony gwint, zerwana lub objechana śruba), albo dostęp do nich jest utrudniony (dotyczy szczególnie rowerów holenderskich). Po dokładną wycenę zapraszam z rowerem☺
        </p>
    </div>
  );
  }
