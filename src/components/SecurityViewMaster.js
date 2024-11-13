import React from 'react';
import TileComponent from './TileComponent';
import TableComponent from './TableComponent';

function SecurityMasterPage() {
  const securities = [
    { id: 1, name: 'Bond A', description: 'Corporate Bond A', closePrice: 120.5 },
    { id: 2, name: 'Equity B', description: 'Stock B', closePrice: -50.75 },
  ];

  return (
    <div>
      <TileComponent activeCount={10} inactiveCount={5} />
      <TableComponent securities={securities} />
    </div>
  );
}

export default SecurityMasterPage;
