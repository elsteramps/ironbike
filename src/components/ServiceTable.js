import React from 'react';
import './ServiceTable.css'


const ServiceTable = ({ services }) => {
  return (
    <div className='table-container'>
      <div className='table-wrapper'>
        <table>
          <thead>
            <tr>
              <th>Nazwa Usługi</th>
              <th>Cena</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index}>
                <td>{service.name}</td>
                <td>{service.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceTable;