import React, { useContext } from 'react';
import PlanetsTableContent from './PlanetsTableContent';
import AppContext from '../context/AppContext';

function PlanetsTable() {
  const { tableInfo } = useContext(AppContext);

  // if (tableInfo.length === 0) {
  //   return (
  //     <h2>LOADING...</h2>
  //   );
  // }

  return (
    <table
      data-testid="table"
    >
      <thead>
        <tr>
          <th data-testid="header">Name</th>
          <th data-testid="header">Rotation Period</th>
          <th data-testid="header">Orbital Period</th>
          <th data-testid="header">Diameter</th>
          <th data-testid="header">Climate</th>
          <th data-testid="header">Gravity</th>
          <th data-testid="header">Terrain</th>
          <th data-testid="header">Surface Water</th>
          <th data-testid="header">Population</th>
          <th data-testid="header">Films</th>
          <th data-testid="header">Created</th>
          <th data-testid="header">Edite</th>
          <th data-testid="header">URL</th>
        </tr>
      </thead>
      {
        tableInfo.map((element) => (<PlanetsTableContent
          key={ element.name }
          element={ element }
        />
        ))
      }
    </table>
  );
}

export default PlanetsTable;
