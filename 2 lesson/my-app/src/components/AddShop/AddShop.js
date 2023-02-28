import React, { useState } from 'react';

function AddShop({ onAddShop }) {
  const [name, setName] = useState('');
  const [openTime, setOpenTime] = useState
  const [closeTime, setCloseTime] = useState('');
  const [distance, setDistance] = useState('');
  const [isSpecial, setIsSpecial] = useState(false);
  
  const handleNameChange = (event) => {
  setName(event.target.value);
  };
  
  const handleOpenTimeChange = (event) => {
  setOpenTime(event.target.value);
  };
  
  const handleCloseTimeChange = (event) => {
  setCloseTime(event.target.value);
  };
  
  const handleDistanceChange = (event) => {
  setDistance(event.target.value);
  };
  
  const handleIsSpecialChange = (event) => {
  setIsSpecial(event.target.checked);
  };
  
  const handleSubmit = (event) => {
  event.preventDefault();
  const newShop = {
  name,
  openTime,
  closeTime,
  distance: parseInt(distance),
  special: isSpecial,
  };
  onAddShop(newShop);
  setName('');
  setOpenTime('');
  setCloseTime('');
  setDistance('');
  setIsSpecial(false);
  };
  
  return (
  <form onSubmit={handleSubmit}>
  <label>
  Название:
  <input type="text" value={name} onChange={handleNameChange} />
  </label>
  <br />
  <label>
  Время открытия:
  <input type="text" value={openTime} onChange={handleOpenTimeChange} />
  </label>
  <br />
  <label>
  Время закрытия:
  <input type="text" value={closeTime} onChange={handleCloseTimeChange} />
  </label>
  <br />
  <label>
  Удалённость от центра доставки (км):
  <input type="text" value={distance} onChange={handleDistanceChange} />
  </label>
  <br />
  <label>
  Особенный магазин:
  <input type="checkbox" checked={isSpecial} onChange={handleIsSpecialChange} />
  </label>
  <br />
  <button type="submit">Добавить магазин</button>
  </form>
  );
  }
  
  export default AddShop;
