// src/components/Product.js
import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="product">
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-image"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default Product;