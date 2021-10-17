import React from 'react';
import Product from './Product';
import productsData from './vschoolProducts';

function App() {
  const products = productsData.map( product => {
    return <Product key={product.id} product={product}/>
  });

  return (
    <div>
      <h1>Products</h1>
      {products}
    </div>
  );
}

export default App;