import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./ProductDetail.css"
import { CSSTransition } from "react-transition-group";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [productId]);

  const [showForm, setShowForm] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '' });
  const navigate = useNavigate();

  const handleClose = (e) => {
    e.preventDefault();
    setShowForm(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/reserve/${selectedProductId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contactInfo)
    })
    .then(response => {
      if (response.ok) {
        alert('Product reserved successfully!');
        setShowForm(false);
        navigate('/shop');// Or update the UI to reflect the change
      } else {
        alert('Failed to reserve product');
      }
    })
    .catch(error => console.error('Error reserving product:', error));
  };

  const handleReserve = (productId) => {
    setShowForm(true);
    setSelectedProductId(productId);
  };

  

  if (!product) return <div>Loading...</div>;

  return (
    <div className='product-detail-container'>
      <h2 className='product-name'>{product.name}</h2>
      <img className='product-image' src={product.image} alt={product.name} />
      <p className='product-price'>Price: {product.price}</p>
      <p className='product-description'>{product.description}</p>
      <button onClick={() => handleReserve(productId)}>Reserve</button>
      {/* Add more product details as needed */}
      {showForm && (
        <CSSTransition
        in={showForm}
        timeout={200}
        classNames="contact"
        unmountOnExit
        >
        <div className="contact-form-modal">
          <form onSubmit={handleFormSubmit}>
          <button onClick={handleClose} className="contact-close-button">Cancer</button>
            <label>Name: <input type="text" value={contactInfo.name} onChange={e => setContactInfo({ ...contactInfo, name: e.target.value })} /></label>
            <label>Email: <input type="email" value={contactInfo.email} onChange={e => setContactInfo({ ...contactInfo, email: e.target.value })} /></label>
            <label>Phone: <input type="tel" value={contactInfo.phone} onChange={e => setContactInfo({ ...contactInfo, phone: e.target.value })} /></label>
            <button type="submit">Submit Reservation</button>
          </form>
        </div>
      </CSSTransition>
      )}
    </div>
  );
}

export default ProductDetail;
