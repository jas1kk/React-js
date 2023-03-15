import React from 'react';
import './Product.css';

const Product = ({ id, name, price, image, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart({ id, name, price, quantity: 1 });
  };

  return (
    <div id='product'>
      <h2 id='product-name'>{name}</h2>
      <p id='product-price'>{price} тенге.</p>
      <button onClick={handleAddToCart} id='product-add-button'>Добавить в корзину</button>
    </div>
  );
};

export default Product;
