import React, { useState } from 'react';

function ShopsTable({ shops }) {
  const [displayedColumns, setDisplayedColumns] = useState([
    'name',
    'openTime',
    'closeTime',
    'distance',
    'special',
  ]);

  return (
    <table>
      <thead>
        <tr>
          {displayedColumns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {shops.map((shop) => (
          <tr key={shop.name}>
            {displayedColumns.map((column) => (
              <td key={column}>{shop[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ShopsTable;
