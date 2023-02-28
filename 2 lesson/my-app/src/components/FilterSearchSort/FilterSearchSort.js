import React, { useState } from 'react';

function FilterSearchSort() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [showSpecialOnly, setShowSpecialOnly] = useState(false);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortByChange = (event) => {
    const newSortBy = event.target.value;
    if (newSortBy === sortBy) {
      // If clicked on the same column, toggle the sort order
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Otherwise, sort by the new column ascending
      setSortBy(newSortBy);
      setSortOrder('asc');
    }
  };

  const handleShowSpecialOnlyChange = (event) => {
    setShowSpecialOnly(event.target.checked);
  };

  const filteredShops = shops.filter((shop) => {
    // Filter by search term
    if (searchTerm) {
      const searchRegex = new RegExp(searchTerm, 'i');
      if (!searchRegex.test(shop.name)) {
        return false;
      }
    }
    // Filter by "special" property
    if (showSpecialOnly && !shop.special) {
      return false;
    }
    return true;
  });

  const sortedShops = filteredShops.sort((a, b) => {
    if (sortBy === null) {
      return 0;
    }
    const aValue = a[sortBy];
    const bValue = b[sortBy];
    if (aValue < bValue) {
      return sortOrder === 'asc' ? -1 : 1;
    } else if (aValue > bValue) {
      return sortOrder === 'asc' ? 1 : -1;
    } else {
      return 0;
    }
  });

  return (
    <div>
      <label>
        Поиск:
        <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
      </label>
      <br />
      <label>
        Сортировка по:
        <select value={sortBy} onChange={handleSortByChange}>
          <option value="">Нет</option>
          <option value="name">Название</option>
          <option value="openTime">Время открытия</option>
          <option value="closeTime">Время закрытия</option>
          <option value="distance">Удалённость от центра доставки</option>
        </select>
        {sortBy !== null && sortOrder === 'asc' && <span> ▲</span>}
        {sortBy !== null && sortOrder === 'desc' && <span> ▼</span>}
      </label>
      <br />
      <label>
        Показывать только "особенные" магазины:
        <input type="checkbox" checked={showSpecialOnly} onChange={handleShowSpecialOnlyChange} />
      </label>
    </div>
  );
}

export default FilterSearchSort;
