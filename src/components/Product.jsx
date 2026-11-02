import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext'; 

const Product = ({ id, title, image, price, category, rating}) => {
  const { addToCart } = useCart();

  const product = { id, title, image, price, category, rating };

  return (
    <div className="card h-100 shadow-sm">
      <img 
        src={image} 
        alt={title} 
        className="card-img-top" 
        style={{ height: '250px', objectFit: 'cover' }} 
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text text-success fw-semibold">₹{price}</p>
        <p className="card-text text-danger">{rating}</p>
        <p className="card-text text-muted">{category}</p>

        {/* Cart button */}
        <button 
          onClick={() => addToCart(product)} 
          className="btn btn-outline-primary mt-auto"
        >
          Add to Cart
        </button>

        {/* Optional link to cart page */}
        <Link to="/cart" className="btn btn-primary w-100 mt-2">
          Go to Cart
        </Link>
      </div>
    </div>
  );
};

export default Product;
