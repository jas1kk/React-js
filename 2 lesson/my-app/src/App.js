import React, { useState } from 'react';
import ShopsTable from './components/ShopsTable/ShopsTable.js';
import FilterSearchSort from './components/FilterSearchSort/FilterSearchSort.js';
import AddShop from './components/AddShop/AddShop.js';

function App() {
  const [shops, setShops] = useState([
    { name: 'Магазин 1', openTime: '10:00', closeTime: '20:00', distance: 5, special: true },
    { name: 'Магазин 2', openTime: '11:00', closeTime: '21:00', distance: 10, special: false },
    { name: 'Магазин 3', openTime: '09:00', closeTime: '19:00', distance: 3, special: true },
  ]);

  const handleAddShop = (newShop) => {
    setShops([...shops, newShop]);
  };

  return (
    <div>
      <h1>Список магазинов</h1>
      <AddShop onAddShop={handleAddShop} />
      <FilterSearchSort />
      <ShopsTable shops={shops} />
    </div>
  );
}

export default App;

