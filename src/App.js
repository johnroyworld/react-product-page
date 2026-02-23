import React, { useState } from 'react';
import ProductList from './components/ProductList';
import './App.css';

const App = () => {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1', price: 10 },
    { id: 2, name: 'Product 2', description: 'Description for Product 2', price: 20 },
    { id: 3, name: 'Product 3', description: 'Description for Product 3', price: 30 },
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