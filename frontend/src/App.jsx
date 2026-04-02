import React, { useEffect, useState } from 'react';

export default function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch('http://localhost:3001/products');
    setProducts(await res.json());
  };

  useEffect(() => { fetchProducts(); }, []);

  return (
    <div>
      <h1>Termékek</h1>
      {products.map(p => (
        <div key={p.id}>
          {p.name} - {p.price}
        </div>
      ))}
    </div>
  );
}