import React from 'react';

function Product(props) {
  const {name, price, description} = props.product;

  return (
    <div>
      <h2>{name}</h2>
      <p>${price} - {description}</p>
    </div>
  );
}

export default Product;