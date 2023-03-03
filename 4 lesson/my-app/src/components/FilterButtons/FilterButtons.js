import React, { useState } from 'react';

const FilterButtons = ({ tasks, onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div>
      <button
        onClick={() => handleFilterChange('All')}
        style={{ backgroundColor: activeFilter === 'All' ? 'yellow' : '' }}
      >
        All
      </button>
      <button
        onClick={() => handleFilterChange('Done')}
        style={{ backgroundColor: activeFilter === 'Done' ? 'yellow' : '' }}
      >
        Done
      </button>
      <button
        onClick={() => handleFilterChange('Important')}
        style={{ backgroundColor: activeFilter === 'Important' ? 'yellow' : '' }}
      >
        Important
      </button>
    </div>
  );
};

export default FilterButtons;
