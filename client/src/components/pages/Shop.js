import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../Shop.css"

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => {
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="shop-container">
      {products.map(product => (
        <Link to={`/products/${product._id}`} key={product._id} className="product-tile">
          <img height={'100px'} src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </Link>
      ))}
    </div>
  );
}

export default Shop;
