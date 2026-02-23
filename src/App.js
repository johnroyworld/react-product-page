import React, { useState } from 'react';
import ProductList from './components/ProductList';
import './App.css';

const App = () => {
  const products = [
    { id: 1, name: 'Wireless Headphones', description: 'Premium noise-cancelling wireless headphones with 30-hour battery life', price: 199.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop' },
    { id: 2, name: 'Smart Watch', description: 'Fitness tracker with heart rate monitor and GPS', price: 299.99, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop' },
    { id: 3, name: 'Laptop Stand', description: 'Ergonomic aluminum laptop stand with adjustable height', price: 49.99, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop' },
    { id: 4, name: 'Mechanical Keyboard', description: 'RGB backlit mechanical keyboard with cherry switches', price: 129.99, image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=300&h=300&fit=crop' },
    { id: 5, name: 'Wireless Mouse', description: 'Ergonomic wireless mouse with precision tracking', price: 79.99, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop' },
    { id: 6, name: 'USB-C Hub', description: '7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader', price: 59.99, image: 'https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=300&h=300&fit=crop' },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Product Homepage</h1>
      <input
        type="text"
        placeholder="Search for a product..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;