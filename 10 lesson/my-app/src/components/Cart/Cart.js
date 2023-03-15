import React from 'react';
import './Cart.css'

const Cart = ({ items, onRemoveFromCart, onClearCart }) => {
  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div id='cart'>
      <table id='cart-table'>
        <tbody>
        <thead>
          <tr>
            <th>№</th>
            <th>Имя</th>
            <th>Кол-во</th>
            <th>Сумма</th>
            <th>Действия</th>
          </tr>
        </thead>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity} тенге.</td>
              <td>
                <button onClick={() => onRemoveFromCart(item) } id='delete-button'>Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 id='tbody2'>Итого: {getTotalPrice()} тенге.</h2>
      <button onClick={onClearCart} id='cart-button'>Очистить корзину</button>
    </div>
  );
};

export default Cart;
