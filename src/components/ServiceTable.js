import React from 'react';
import './ServiceTable.css'


const ServiceTable = (props) => {

  const {services, table_name} = props;

  return (
    <div className='table-container'>
      <div className='table-wrapper'>
      <h3 className='table-name'>{table_name}</h3>
        <table>
          <thead>
            <tr>
              <th className='table-header'>Nazwa Usługi</th>
              <th className='table-header'>Cena</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index}>
                <td>{service.name}</td>
                <td className='price-field'>{service.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceTable;