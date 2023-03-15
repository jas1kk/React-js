import React, { useState } from 'react';
import './App.css'
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += product.quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const handleRemoveFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div id='app'>
      <Product
        id={1}
        name="Молоко Родина 2л"
        price={370}
        onAddToCart={handleAddToCart}
      />
      <Product
        id={2}
        name="Куриная Грудка 1кг"
        price={1800}
        onAddToCart={handleAddToCart}
        />
        <Product
             id={3}
             name="Сок Яблочный 2л"
             price={600}
             onAddToCart={handleAddToCart}
           />
        <Cart items={cartItems} onRemoveFromCart={handleRemoveFromCart} onClearCart={handleClearCart} />
        </div>
        );
        };
        
        export default App;
